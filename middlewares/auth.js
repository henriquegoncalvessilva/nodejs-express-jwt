import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

const auth = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({
            message: "Access Denied",
        });
    }
    try {
        const decodedToken = jwt.verify(
            token.replace("Bearer ", ""),
            JWT_SECRET
        );
        console.log(decodedToken);
        next();

    } catch (error) {
        return res.status(401).json({ message: "Invalid Token" });
    }
};
export default auth;
