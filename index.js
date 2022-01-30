import express from "express";
import bodyParser from 'body-parser';

import fileUploadRoute from './routes/fileUpload.js';

const app = express();

const PORT = 5000;

app.use(bodyParser.json());

app.use('/file', fileUploadRoute);

app.get('/', (req, res)=>{
    console.log('[test}!');

    res.send("hello from Home page");
})

app.listen(PORT, ()=> {
    console.log(`Server running on port: http://localhost:${PORT}`)
})