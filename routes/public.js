import express from "express";
import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";

//importa apenas as rotas
const router = express.Router();
const prisma = new PrismaClient();

const JWT_SECRET = process.env.JWT_SECRET;

router.post("/cadastro", async (req, res) => {
    try {
        const user = req.body;

        const salt = await bcrypt.genSalt(10);
        const hasPassword = await bcrypt.hash(user.password, salt);

        const userDB = await prisma.user.create({
            data: {
                email: user.email,
                name: user.name,
                password: hasPassword,
            },
        });
        res.status(201).json(userDB);
    } catch (err) {
        res.status(500).json({ message: "Erro no servidor. Tente novamente" });
    }
});

//Login
router.post("/login", async (req, res) => {
    try {
        const userInfo = req.body;

        const user = await prisma.user.findUnique({
            where: {
                email: userInfo.email,
            },
        });

        if (!user) {
            return res
                .status(404)
                .json({ message: "Algo deu errado.  Tente novamente" });
        }

        const isMatch = await bcrypt.compare(userInfo.password, user.password);

        if (!isMatch) {
            return res.status(400).json({
                message: "Algo deu errado. Verifique as informações",
            });
        }

        const token = jwt.sign({id: user.id},JWT_SECRET,{expiresIn:'1m'})

        res.status(200).json(token);
    } catch (error) {
        res.status(500).json({ message: "Erro no servidor. Tente novamente" });
    }
});

export default router;
