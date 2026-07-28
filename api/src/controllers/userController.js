import { error } from "node:console";
import { userSchema } from "../schemas/userSchema.js";
import { userService } from "../services/index.js";
import { generateAuthToken } from "../utils/tokenUtils.js";
import { getErrorMessage } from "../utils/errorUtils.js";

export async function register(req, res) {
    try {
        const userData = await userSchema.parseAsync(req.body);
        const user = await userService.register(userData);
        const token = generateAuthToken(user);

        res.json({
            _id: user.id,
            email: user.email,
            accessToken: token,
        });
    } catch (err) {
        return res.status(400).json({ err: getErrorMessage(err)})
    }
}

export async function login(req, res) {
    const { email, password } = req.body;

    try {
        const user = await userService.login(email, password);
        const token = generateAuthToken(user);

         res.json({
            _id: user.id,
            email: user.email,
            accessToken: token,
        });
    } catch (err) {
        return res.status(400).json({ err: getErrorMessage(err) });
    }
}

export async function logout(req, res) {
    res.json({ message: 'Logout successful' });
}