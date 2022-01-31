import express from "express";
import bodyParser from 'body-parser';
import dotenv from 'dotenv'


import fileUploadRoute from './routes/fileUploadRoute.js';
import userRoute from './routes/userRoute.js'

const app = express();

//for body parser
app.use(bodyParser.json());

//for access env file 
dotenv.config();

//file routes
app.use('/file', fileUploadRoute);
//user routes
app.use('/users', userRoute);

//home router
app.get('/', (req, res)=>{
    console.log('[Home router ]!');
    res.send("hello from Home page");
})

app.listen(process.env.PORT ?? 5000, ()=> {
    console.log(`Server running on port: http://localhost:${process.env.PORT}`)
})