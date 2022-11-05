const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const mongoose = require("mongoose")
require("dotenv").config();
const fs = require("fs");
const path = require("path");
const multer = require("multer");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.use(express.json());
app.set('view engine', 'ejs');

mongoose.connect(process.env.MONGO_URL);


var storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, 'uploads')
	},
	filename: (req, file, cb) => {
		cb(null, file.fieldname + '-' + Date.now())
	}
});

var upload = multer({ storage: storage });

var imgModel = require('./model');



app.get("/", (req, res)=>{
    res.render("main");
})

app.get("/lost", (req, res)=>{
    imgModel.find({region: "noregion"}, (err, items) =>{
        if(err){
            console.log(err);
            res.status(500).send('Error occured', err);
        }
        else{
            res.render('lost', {items: items});
        }
    })
})
app.post("/lost", (req, res)=>{

    imgModel.find({
        region: req.body.region,
        city: req.body.city,
        category: req.body.category}, (err, items) =>{
        if(err){
            console.log(err);
            res.status(500).send('Error occured', err);
        }
        else{
            res.render('lost', {items: items});
        }
    })
})

app.post("/found", upload.single('image'), (req, res, next) =>{
    var obj = {
		region: req.body.region,
        city: req.body.city,
        category: req.body.category,
        comment: req.body.comment,
        phone: req.body.phone,
		img: {
			data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
			contentType: 'image/png'
		}
    }
    imgModel.create(obj, (err, item) => {
		if (err) {
			console.log(err);
		}
		else {
			item.save();
			res.redirect('/');
		}
	});
})

app.get("/found", (req, res)=>{
    res.render("found");
})

var port = process.env.PORT;
if(port == null || port == "")
{
	port=5000;
}
app.listen(port, ()=>{
    console.log("Listening on "+ port)
});