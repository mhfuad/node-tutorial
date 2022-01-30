import express from "express";
import bodyParser from 'body-parser';
import dotenv from 'dotenv'

import fileUploadRoute from './routes/fileUpload.js';

const app = express();

//for body parser
app.use(bodyParser.json());

//for access env file 
dotenv.config();

app.use('/file', fileUploadRoute);

app.get('/', (req, res)=>{
    console.log('[test}!');

    res.send("hello from Home page");
})

app.listen(process.env.PORT ?? 5000, ()=> {
    console.log(`Server running on port: http://localhost:${process.env.PORT}`)
})