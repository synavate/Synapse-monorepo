import axios from 'axios';
import { Request, Response } from 'express';
import dotenv from 'dotenv';
import initalizeBackend;

const baseUrl = 'http://127.0.0.1:3042/api/v1';


//Assuming an MVC Design Pattern @TODO Alex - Determine with FE Dev & Compatbility with Kong API Gateway
// Models




// Controllers


// Views 
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

// This should use a callback to initialize the backend processes for the user. Depending on the workflow.
    router.post('/synaptualize', initializeBackend);

}








