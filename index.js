import express from 'express';
const app = express();
app.get('/',(req,res)=>{
    res.send('hello from server side');
})
app.get('/about',(req,res)=>{
    res.send('hello about section');
    res.end()
})
const PORT = process.env.PORT || 3000
app.listen(PORT,()=>console.log(`serveer is running at ${4000}`))