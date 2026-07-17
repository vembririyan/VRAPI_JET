import jwt, { JwtPayload } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

const PUBLIC_ROUTES = ["/sign-in", "/sign-up"];

export default function validation(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  // JWT dimatikan
  if (process.env.JWT_ACTIVE === "false") {
    return next();
  }

  // Route publik
  if (PUBLIC_ROUTES.includes(req.path)) {
    return next();
  }

  const authorization = req.headers.authorization;

  if (!authorization?.startsWith("Bearer ")) {
    res.status(401).json({
      status: 401,
      message: "Unauthorized",
    });
    return;
  }

  const token = authorization.substring(7);

  try {
    const payload = jwt.verify(
      token,
      process.env.SECRET_JWT!,
    ) as JwtPayload;

    (req as Request & { user?: JwtPayload }).user = payload;

    next();
  } catch {
    res.status(401).json({
      status: 401,
      message: "Unauthorized",
    });
  }
}