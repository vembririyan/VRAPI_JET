import { Request, Response, Router } from "express";

import { mysqlPool, postgresPool } from "@/app/connection";
import validation from "@/app/validation";

const router = Router();

router.get("/test_mysql", validation, async (_req: Request, res: Response) => {
  const [rows] = await mysqlPool.query("SELECT * FROM config");

  res.json(rows);
});

router.get(
  "/test_postgresql",
  validation,
  async (_req: Request, res: Response) => {
    const { rows } = await postgresPool.query("SELECT * FROM core.users");

    res.json(rows);
  },
);

export default router;
