import { Request, Response, NextFunction } from "express";
import logging from "../config/logging";
const NAMESPACE = "User Controller";

const getAllUsers = (req: Request, res: Response, next: NextFunction) => {
  logging.info(NAMESPACE, `Get all users route called`);

  return res.status(200).json({
    success: true,
    message: "Hello",
  });
};

export default {
  getAllUsers,
};
