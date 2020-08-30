const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

app.use(express.static(path.join(__dirname,'./public')));

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname,'./tributepage.html'));
  //__dirname : It will resolve to your project folder.
});

app.get('/surveyform',function(req,res){
  res.sendFile(path.join(__dirname,'./surveyform.html'));
  //__dirname : It will resolve to your project folder.
});

app.get('/doc',function(req,res){
 res.sendFile(path.join(__dirname,'./techdoc.html'));

});

app.get('/landingpage',function(req,res){

res.sendFile(path.join(__dirname,'./landingpage.html'));
});

app.get('/portfolio',function(req,res){

  res.sendFile(path.join(__dirname,'./myportfolio.html'));

});

console.log(__dirname);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
