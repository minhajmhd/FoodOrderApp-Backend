const db = require('./db');

const getAllProducts = () => {
    return db.Food.find().then((result) => {
        if(result){
            return{
                status:true,
                statusCode:200,
                Product:result
            }
        }
        else{
            return{
                status:false,
                statusCode:402,
                message:'Product not found'
            }
        }
    })
}

module.exports = {
    getAllProducts
}