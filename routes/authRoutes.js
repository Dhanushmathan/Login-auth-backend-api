// login routes
import express from "express";
import LoginModel from "../models/User.js";
import { login, register } from "../controllers/authController.js";

const router = express.Router();

router.post("/login", login);
router.post("/register", register);

// Protecting routes
router.get("/protected", auth, (req, res) => {
    res.json({ message: `Welcome user ${req.user.id}`});
})

export default router;