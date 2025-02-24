const mongoose = require('mongoose');

const optionSchema = new mongoose.Schema({
    photo:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    name2:{
        type:String,
        required:true
    },
    naverMap:{
        type:String,
        required:true
    },
    lat:{
        type:Number,
        required:true
    },
    lon:{
        type:Number,
        required:true
    },
    discount:{
        type:String,
        required:true
    },
    etc:{
        type:String,
        required:true
    }
});

const option = mongoose.model('Option',optionSchema);

module.exports = option;