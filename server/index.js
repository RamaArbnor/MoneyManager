// require('dotenv').config

const express = require("express");
const cors = require('cors');
const mongoose = require('mongoose')
const Bill = require('./models/billModel.js')

const app = express();  

app.use(express.json());
app.use(cors())

app.get("/bills", async (req, res) => {
   const results = await Bill.find({paid: false})
   res.send(results)
});

app.post("/add/bill", async (req, res) => {
    const {name, data, description, amount, paid} = req.body
    
    try {
        const bill = await Bill.create({name, data, description, amount, paid})
        res.status(200).json(bill)
    } catch(e){ 
        res.status(400).json({error: e.message})

    }
});

// PORT
const PORT = process.env.PORT || 5000;

// connect to db
mongoose.connect('mongodb+srv://root:toor@cluster0.ykgrveo.mongodb.net/?retryWrites=true&w=majority')
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on PORT: ${PORT} \nDataBase Connected`);
         });
    })
    .catch((e) => {
        console.log(e)
    })






