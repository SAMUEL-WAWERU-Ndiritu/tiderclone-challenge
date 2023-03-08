import express from 'express'
//T8UJlG3ObQAzmQF4
import mongoose from 'mongoose'
// import Cards from './dnCard.js'
import cors from 'cors'

const Data = [
    {
        name:"sam",
        imgUrl:"gfff",
    },
    {
        name:"sam",
        imgUrl:"gfff",
    },
    {
        name:"sam",
        imgUrl:"gfff",
    }
]




const app = express();
const port = process.env.PORT || 3000
//mongo db url
// const connectUrl = `mongodb+srv://samuel:T8UJlG3ObQAzmQF4@cluster0.psjzz0v.mongodb.net/?retryWrites=true&w=majority`;


app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors())

//db connect

// mongoose.connect(connectUrl,{
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology:true
// })


app.get('/',(req,res)=>{
    res.status(200).send('hello word')
})


app.post('/tinder/card',(req,res)=>{
    const dbCard = {
        name:req.body.name,
        imgUrl:req.body.imgUrl
    }
    try{
        Data.push(dbCard);
         res.status(201).send(Data)
    }catch(err){
        res.status(500).send(err)
    }
    
    // Cards.create(dbCard,(err,data)=>{
    //     if(err){
    //         res.status(500).send(err)
    //     }else{
    //         res.status(201).send(data)
    //     }
    // })
})



app.get('/tinder/card',(req,res)=>{

     try{
         res.status(200).json(Data)
     }catch(err){
        res.status(500).send(err)
     }
   
   
    // Cards.find((err,data)=>{
    //     if(err){
    //         res.status(500).send(err)
    //     }else{
    //         res.status(200).send(data)
    //     }
    // })
})

app.listen(port,(req,res)=>{
    console.log('server running on port 3000')

})