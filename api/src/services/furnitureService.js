import { prisma } from "../lib/prisma.js";

export async function getAll() {
    const result = await prisma.furniture.findMany();

    return result.map(f => ({
        ...f,
        _id: f.id
    }));
}

export async function getById(furnitureId) {
    const result = await prisma.furniture.findUnique({
        where: { id: furnitureId }
    });

    return result? { ...result, _id: result.id } : null;
}

export async function create(furnitureData) {
    return prisma.furniture.create({
        data: furnitureData
    });
}