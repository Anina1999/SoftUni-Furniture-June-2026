import * as z from 'zod';
import bcrypt from 'bcrypt';

export const createUserSchema = z.object({
    email: z.string().email({ error: 'Invalid email address' }),
    password: z.string()
    .min(6, { error: 'Password must be at least 6 characters long' })
    .transform(async (val) => bcrypt.hash(val, 10)),
})