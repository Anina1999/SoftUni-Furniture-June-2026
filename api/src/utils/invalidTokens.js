const invalidTokens = [];

export function addInvalidToken(token) {
    invalidTokens.push(token);
}

export function isTokenInvalid(token) {
    return invalidTokens.includes(token);
}