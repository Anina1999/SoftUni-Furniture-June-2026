import { createUserSchema } from "../schemas/userSchema.js";
import { userService } from "../services/index.js";
import { generateAuthToken } from "../utils/tokenUtils.js";

export async function register(req, res) {
    try {
        const userData = await createUserSchema.parseAsync(req.body);
        const user = await userService.register(userData);
        const token = generateAuthToken(user);

        res.json({
            _id: user.id,
            email: user.email,
            accessToken: token,
        });
    } catch (err) {
        return res.status(400).json({ err: error.errors})
    }
}