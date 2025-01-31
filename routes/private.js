import express from "express";
import { PrismaClient } from "@prisma/client";

const router = express.Router();
const prisma = new PrismaClient();

router.get("/listar", async (_, res) => {
    try {
        const users = await prisma.user.findMany( );
        res.status(200).json({
            message: "Users have been listed successfully.",
            users,
        });
    } catch (error) {
        res.status(500).json({ message: "Server error. Please try again." });
    }
});

export default router