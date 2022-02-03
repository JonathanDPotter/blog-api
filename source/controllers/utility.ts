import { Request, Response } from "express";

const healthCheck = (req: Request, res: Response) => res.sendStatus(200)

const controller = { healthCheck };

export default controller;