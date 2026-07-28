import { prisma } from "../lib/prisma.js";

export async function create(furnitureData) {
    return prisma.furniture.create({
        data: furnitureData
    });
}