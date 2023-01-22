import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import cors from 'cors';
import * as url from 'url';
import statusRouter from './routers/statusRouter.js';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

// initialise express
const app = express();

// allow cross-origin requests
app.use(cors());

// use body parser to add body property to req obj
app.use(bodyParser.json());

// serve static files to browser
app.use(express.static(path.join(__dirname, '../client/dist/')));

// route all reqs for data to router file
app.use('/status', statusRouter);

// export app server
export default app;