import express from "express";
import userController from "../controllers/user";

const router = express.Router();

router.get("/allUsers", userController.getAllUsers);

export = router;
