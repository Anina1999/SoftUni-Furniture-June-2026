import { prisma } from "../lib/prisma.js";

export async function getAll(filter = {}) {
    const result = await prisma.furniture.findMany({
        where: filter,
        select: {
            id: true,
            description: true,
            price: true,
            img: true,
        }
    });

    return result.map(f => ({
        ...f,
        _id: f.id
    }));
}

export async function getById(furnitureId) {
    const result = await prisma.furniture.findUnique({
        where: { id: furnitureId }
    });

    return result? { ...result, _id: result.id, _ownerId: result.userId } : null;
}

export async function create(furnitureData, userId) {
    return prisma.furniture.create({
        data: {
            ...furnitureData,
            userId,
        }
    });
}

export function remove(furnitureId, userId) {
    return prisma.furniture.delete({
        where: {
            id: furnitureId,
            userId,
        }
    })
}

export function update(furnitureId, userId, furnitureData) {
    return prisma.furniture.update({
        where: {
            id: furnitureId,
            userId,
        },
        data: furnitureData
    });
}