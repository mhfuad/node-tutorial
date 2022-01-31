import express from "express";
import { uploadFile } from '../controllers/fileuploadController.js'
import multer from "multer";

const router = express.Router();

//Configuration for Multer
const fileStorageEngine = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, './images');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now()+file.originalname)
    }
});
const upload = multer({ storage: fileStorageEngine });


router.post('/', upload.single("image"), uploadFile)

export default router;