const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const PORT = 3000;

const storage = multer.diskStorage({destination:function(req,file,cb){cb(null,'uploads/');},
filename: function(req,file,cb){cb(null,Data.now()+path.extname(file.originalname))}});
const upload = multer({storage:storage});

app.set('view engine','ejs');
app.use(express.static('public'));
app.use('/uploads',express.static('uploads'));

app.get('/',(req,res)=>{res.render('index',{ image:null});});

app.get('/upload',(req,res)=>{res.render('upload');});

app.post('/upload', upload.single('image'), (req, res) => {
	res.render('index', { image: `/uploads/${req.file.filename}` });
});
app.listen(PORT,()=>{console.log(`Server is running on http://localhost:{3000}`);});