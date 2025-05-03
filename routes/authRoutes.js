// login routes
import express from "express";
import { login, register } from "../controllers/authController.js";
import { auth } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

// Protecting routes
router.get("/protected", auth, (req, res) => {
    res.json({ message: `Welcome user ${req.user.username}`, user: req.user });
});

export default router;