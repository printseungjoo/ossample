const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/category',{
//     useNewUrlParser:true,
//     useUnifiedTopology:true
// })
// .then(()=>console.log('Successfully connected to MongoDB'))
// .catch((err)=>console.error('Cannot connect to MongoDB'))

const categorySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    }
});

const category = mongoose.model('Category',categorySchema);

module.exports = category;