const express = require('express');
const app=express();
require('dotenv').config();


const {DataTypes } = require('sequelize');
const {sequelize} = require('./models/index')

const userModel=require('./models/user');

const user=userModel(sequelize,DataTypes)

app.post('/',async(req,res)=>{
    sequelize.query('');

    let data = await user.create({name:'Akash Jana Maity'})
    res.json({
        data
    })


})





const port =process.env.PORT||8000

const server = app.listen(port,()=>{
    console.log(`Server is Running on ${port}`)
})

module.exports=server;