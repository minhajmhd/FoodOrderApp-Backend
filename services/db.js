const mongoose = require('mongoose'); 

mongoose.connect('mongodb://localhost:27017/foodmine', () => {
    console.log('Connected to MongoDB');
});

const Food = mongoose.model('Food', {
    idCategory:String,
    strCategory:String,
    price:Number,
    strCategoryThumb:String,
    strCategoryDescription:String
})

module.exports = {
    Food
}

