import multer from "multer";

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

export const uploadFile = (req, res) => {
    console.log(req.file)
    res.send(req.file.path);
}