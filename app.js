const express = require("express")
const app = express()
const path = require("path")
let port = 3002;

app.get('/home',(req,res)=>{
	res.sendFile(path.join(__dirname,'./views/home.html'));
});

app.get('/',(req,res)=>{
	res.send('hola estas en about')
});

app.listen(port, ()=>{
    console.log(`
    Nuestra app funciona en
    http://localhost:${port}`);
})

app.use(express.static('public'));