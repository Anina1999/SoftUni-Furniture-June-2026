import { prisma } from "../lib/prisma.js";

export function register(userData) {
    return prisma.user.create({
        data: userData
    });
}