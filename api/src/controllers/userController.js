export function register(req, res) {
    console.log(req.body);
    res.json({ message: 'User registered successfully' });
}