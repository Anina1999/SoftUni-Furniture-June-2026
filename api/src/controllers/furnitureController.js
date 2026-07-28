import { createFurnitureSchema } from "../schemas/furnitureSchema.js";
import { furnitureService } from "../services";
import { getErrorMessage } from "../utils/errorUtils.js";

export async function getAll(req, res) {
    const furniture = await furnitureService.getAll();  
    res.json(furniture);
}

export async function create(req, res) {
    const { success, data, error } = createFurnitureSchema.safeParse(req.body);

    if (!success) {
        return res.status(400).json({message:getErrorMessage(error)});
    }
    
    const result = await furnitureService.create(data);
    res.json({ message: 'Furniture created' });
}