import * as z from 'zod';

export function getErrorMessage(error) {
    switch(error.name) {
        case 'ZodError':
            return Object.values(z.flattenError(error).fieldErrors).flat().join(', ') || 'Invalid input';   
        default: 
            return error.message || 'An unknown error occupied';
    }
}