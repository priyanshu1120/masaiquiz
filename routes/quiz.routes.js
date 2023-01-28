const express = require("express");
const quizRouter = express.Router();
const { quizModel } = require("../model/quiz.model");

let setcategory=[];

quizRouter.get('/quiz',async (req,res)=>{
    let {page=1,noofqus=10,category,difficulty} = req.query
    if(category && difficulty){
         let data = await quizModel.find({category,difficulty}).limit(noofqus).skip(noofqus*(page-1));
         return res.send(data);
    }
    else {
    let data = await quizModel.find().limit(noofqus).skip(noofqus*(page-1));
    res.send(data)}
 })

 module.exports = {quizRouter}