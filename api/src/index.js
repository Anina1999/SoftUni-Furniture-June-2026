import express from 'express';
import routes from './routes.js';
import cors from 'cors';

const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!!!');
});

app.use(routes);

const PORT = process.env.PORT || 3030;

app.listen(PORT, () => { console.log(`Server is listening on port http://localhost:${PORT}`); })