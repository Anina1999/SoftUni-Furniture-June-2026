import { createFurnitureSchema } from "../schemas/furnitureSchema.js";
import { furnitureService } from "../services";
import { getErrorMessage } from "../utils/errorUtils.js";
import querystring from 'querystring';

export async function getAll(req, res) {
    let filter = {};

    if (req.query.where) {
        const result = querystring.parse(req.query.where.replaceAll('"', ''));

        filter.userId = result._ownerId;
    }

    const furniture = await furnitureService.getAll(filter);  
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

export async function update(req, res) {
    const { furnitureId } = req.params;
    const userId = req.user.id;

    try {
        const furnitureData = createFurnitureSchema.parse(req.body);
        const updatedFurniture = await furnitureService.update(furnitureId, userId, req.body);
        res.json({ message: 'Furniture updated', furniture: updatedFurniture });
    } catch (err) {
        res.status(500).json({ message: getErrorMessage(err) });
    }
}