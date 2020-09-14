const express = require('express');
const multer = require('multer');
const path = require('path');


// Set Storage Engine
const storage = multer.diskStorage({
    destination: './public/uploads/',
    filename: (req, file, callback) =>{
        callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});


//Init Upload variable
const upload = multer({
    storage: storage,
    limits: {fileSize: 1000000},
    fileFilter: (req, file, callback) => {
        checkFileType(file, callback);
    }
}).single('imagefile');


//Check File type
function checkFileType(file, callback){
    //Allowed extensions
    const fileTypes = /jpeg|jpg|png|gif/;

    //Check ext
    const extName = fileTypes.test(path.extname(file.originalname).toLowerCase());

    // Check mime
    const mimetype = fileTypes.test(file.mimetype);

    if(mimetype && extName){
        return callback(null, true);
    }else{
        callback('Error: Upload images only');
    }
}


//Init app
const app = express();

//EJS
app.set('view engine', 'ejs');

//Public Folder
app.use(express.static('./public'));


//Route
app.get('/', (req, res) => res.render('index'));

app.post('/upload', (req, res) => {
    upload(req, res, (err) => {
        if(err){
            res.render('index', { msg: err });
        }else{
            if(req.file == undefined){
                res.render('index', { msg: 'No file selected' });
            }else{
                res.render('index', {
                    msg: 'Image Uploaded Successfully',
                    file: `uploads/${req.file.filename}`
                });
            }
        }
    });
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});