
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'
import bodyParser from 'body-parser';
mongoose.connect("mongodb+srv://hgsarun:arundb@cluster0.2uvqtq3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(()=>console.log("mongoose connect..."))
const schemaObject = {
   textData :String,
}
const dataSchema = mongoose.Schema(schemaObject)
const SendData = mongoose.model('SendData',dataSchema);

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.get('/',(req,res)=>{
    res.send('hello from server side');
    res.end()
})

app.post('/sendData',(req,res)=>{
    const D = new SendData({
        textData:req.body.senddata
    })
    D.save();
    res.end('successfully send data..')
})
app.get('/sendData',(req,res)=>{
    // SendData.find({}).then((data)=>res.send(data));
    res.end('hllow datra')
})
const PORT = process.env.PORT || 3000
app.listen(PORT,()=>console.log(`serveer is running at ${3000}`))