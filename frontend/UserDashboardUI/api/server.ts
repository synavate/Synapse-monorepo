import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import Routes from './api'; // Updated import statement

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.use('/api/v1', backendRoutes); // Updated to use the new router

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});