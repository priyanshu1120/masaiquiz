const mongoose = require("mongoose")

const quizSchema  = mongoose.Schema({
    "category":{type:String},
    "type":{type:String},
    "difficulty":{type:String},
    "question":{type:String},
    "correct_answer":{type:String},
    "incorrect_answers":[]
})

const quizModel = mongoose.model("quiz",quizSchema)
module.exports = {quizModel}