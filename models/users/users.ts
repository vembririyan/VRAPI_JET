import { Request, Response, Router } from "express";

import { postgresPool } from "@/app/connection";
import validation from "@/app/validation";

const router = Router();

router.get("/users", validation, async (_req: Request, res: Response) => {
  const { rows } = await postgresPool.query("SELECT * FROM core.users");

  res.json(rows);
});

export default router;
