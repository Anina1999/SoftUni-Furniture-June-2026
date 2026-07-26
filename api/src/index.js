import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!!!');
});

const PORT = process.env.PORT || 3030;

app.listen(PORT, () => { console.log(`Server is listening on port http://localhost:${PORT}`); })