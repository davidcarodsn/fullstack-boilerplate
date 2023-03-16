import { Request, Response } from "express";

export function getExample(_: Request, res: Response) {
  res.json({
    message: 'This is the get example!!!'
  })
}

