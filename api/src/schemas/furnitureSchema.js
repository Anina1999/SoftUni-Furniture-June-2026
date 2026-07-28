import * as z from 'zod';

export const createFurnitureSchema = z.object({
    make: z.string().min(4, 'Make must be at least 4 characters long'),
    model: z.string().min(3, 'Model must be at least 3 characters long'),
    year: z.coerce.number()
        .min(1950, 'Year must be at least 1950')
        .max(new Date().getFullYear(), 'Year cannot be in the future'),
    description: z.string().min(10, 'Description must be at least 10 characters long'),
    price: z.coerce.number().min(0, 'Price must be a positive number'),
    img: z.string().url('Image URL must be a valid URL'),
    material: z.string().optional(),
})