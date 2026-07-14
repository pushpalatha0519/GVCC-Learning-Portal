const mongoose = require("mongoose");


const bookmarkSchema = new mongoose.Schema({

    videoId:{
        type:String,
        required:true
    },


    name:{
        type:String,
        default:"Bookmark"
    },


    time:{
        type:Number,
        required:true
    }


},
{
    timestamps:true
});


module.exports = mongoose.model(
    "Bookmark",
    bookmarkSchema
);