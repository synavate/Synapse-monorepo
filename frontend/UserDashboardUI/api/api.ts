import axios from 'axios';
import { Request, Response } from 'express';
import dotenv from 'dotenv';
import initalizeBackend;

const baseUrl = 'http://127.0.0.1:3042/api/v1';

// Models




// Controllers





const initializeBackend = async (req: Request, res: Response) => {
    try {
        const { user, pass, DiD } = req.body as UserGraph;
        // Assuming the backend initialization might involve setting up user graphs or other preparatory steps.
        const response = await axios.post(`${baseUrl}/synaptualize`, { user, pass, DiD });
        res.json(response.data);
    } catch (error) {
        // Error handling: it's a good practice to provide meaningful error messages.
        res.status(500).send(error.message);
    }
};





// Routes

function Routes() {
    const router = express.Router();

// Adjust the route as well if you feel necessary. Here, it's kept as '/initialize' for simplicity.
    router.post('/synaptualize', initializeBackend);

}








