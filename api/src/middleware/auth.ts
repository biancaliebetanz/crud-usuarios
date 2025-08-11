import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';

export function auth(req: Request, resp: Response, next: NextFunction) {
  try {
    const token = req.headers["x-access-token"] as unknown as string;
    jwt.verify(token!, process.env.SECRET!);
    next();
  } catch {
    resp.status(401).send();
  }
}