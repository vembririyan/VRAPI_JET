import "dotenv/config";

import cors from "cors";
import express, {
  type Application,
  type NextFunction,
  type Request,
  type Response,
} from "express";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import rateLimit from "@/middleware/rate-limit";
import helmet from "helmet";
import { pathToFileURL } from "node:url";
import { allowedOrigins } from "../allowed-origin";

// __dirname replacement (ES Modules)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app: Application = express();

const ROUTES_DIR = path.join(__dirname, "../models");
const PUBLIC_DIR = path.join(__dirname, "public");

const corsOptions = {
  origin(origin: string | undefined, callback: Function) {
    if (!origin || allowedOrigins.includes(origin)) {
      return callback(null, true);
    }

    return callback(new Error("Forbidden"));
  },

  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],

  allowedHeaders: ["Content-Type", "Authorization", "vrapi_token"],
};

// Middleware
app.use(rateLimit);
app.disable("x-powered-by");
app.use(helmet());
app.use(cors(corsOptions));
app.use(express.static(PUBLIC_DIR));
app.use(express.json({ limit: "5mb" }));
app.use(
  express.urlencoded({
    extended: true,
    limit: "5mb",
  }),
);

console.log("x-powered-by:", app.get("x-powered-by"));

// Error Handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  req.setTimeout(10000);
  if (err.message === "Forbidden") {
    return res.status(403).json({
      success: false,
      message: "Forbidden",
    });
  }

  next(err);
});

function getRouteFiles(dir: string): string[] {
  const files: string[] = [];

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      files.push(...getRouteFiles(fullPath));
    } else if (entry.isFile() && /\.(js|ts|mjs|cjs)$/.test(entry.name)) {
      files.push(fullPath);
    }
  }

  return files;
}

// Auto Register Routes

for (const file of getRouteFiles(ROUTES_DIR)) {
  const module = await import(pathToFileURL(file).href);

  app.use(module.default);
}

export { express };
export default app;
