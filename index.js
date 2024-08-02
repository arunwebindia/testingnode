import express from 'express';
const app = express();
app.get('/',(req,res)=>{
    res.send('hello from server side');
})
app.get('/about',(req,res)=>{
    res.send('hello about section');
    res.end()
})
app.listen(4000,()=>console.log(`serveer is running at ${4000}`))