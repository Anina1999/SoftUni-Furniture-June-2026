import { createFurnitureSchema } from "../schemas/furnitureSchema.js";
import { furnitureService } from "../services";
import { getErrorMessage } from "../utils/errorUtils.js";

export async function getAll(req, res) {
    const furniture = await furnitureService.getAll();  
    res.json(furniture);
}

export async function getById(req, res) {
    const { furnitureId } = req.params;

    const furniture = await furnitureService.getById(furnitureId);

    if (!furniture) {
        return res.status(404).json({ message: 'Furniture not found' });
    }
    res.json(furniture);
}

export async function create(req, res) {
    const userId = req.user.id;
    const { success, data, error } = createFurnitureSchema.safeParse(req.body);

    if (!success) {
        return res.status(400).json({message:getErrorMessage(error)});
    }
    
    const result = await furnitureService.create(data, userId);
    res.json({ message: 'Furniture created' });
}

export async function remove(req, res) {
    const { furnitureId } = req.params;
    const userId = req.user.id;
    const furniture = await furnitureService.getById(furnitureId);

    if (!furniture) {
        return res.status(404).json({ message: 'Furniture not found' });
    }

    if (furniture.userId !== userId) {
        return res.status(403).json({ message: 'You are not authorized to delete this furniture'});
    }

    try {
        await furnitureService.remove(furnitureId, userId);

        res.json({ message: 'Furniture deleted' });
    } catch (err) {
        res.status(500).json({ message: 'Error deleting furniture' });
    }
}