const mongoose = require('mongoose');

const productsSchema = new mongoose.Schema({
    neme: {
        type: 'string',
    },
    brand:{
        type: 'string',
    },
    price:{
        type: 'string',
    },
    quantity:{
        type: 'string',
    },
    data: {
     type: 'Data',
     default: "Data.new"
    }
})

mongoose.models={}
module.exports = mongoose.model('Product', productsSchema)