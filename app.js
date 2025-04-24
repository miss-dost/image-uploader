const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const PORT = 3000;

const storage = multer.diskStorage({destination:'./uploads/',
filename: function(req,file,cb){cb(null,Data.now()+path.extname(file.originalname))}});
const upload = multer({storage:storage});

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use(express.static('upload'));
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{res.render('index',{ image:null});});
app.get('/upload',(req,res)=>{res.render('upload');
});

app.post('/upload', upload.single('image'), (req, res) => {
	res.render('index', { image: `/upload/{req.file.filename}` });
});
app.listen(PORT,()=>{console.log(`Server is running on http://localhost:{3000}`);}); 