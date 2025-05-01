// login routes
import express from "express";
import LoginModel from "../models/User.js";

const router = express.Router();

router.get("/", (req, res) => {
    res.json({ message: "Login API" });
})



export default router;