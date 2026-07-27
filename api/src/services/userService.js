import { prisma } from "../lib/prisma.js";
import bcrypt from 'bcrypt';

export function register(userData) {
    return prisma.user.create({
        data: userData
    });
}

export async function login(email, password) {
    const user = await prisma.user.findUnique({
        where: { email },
    });

    if (!user) {
        throw new Error("Invalid email or password");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
        throw new Error('Invalid email or password');
    }

    return user;
}