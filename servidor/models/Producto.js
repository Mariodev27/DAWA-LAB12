const mongoose = require('mongoose');

const ProductoSchema = mongoose.Schema({
    
    producto: {
        type: String,
        require: true
    },
    categoria: {
        type: String,
        require: true
    },
    descripcion: {
        type: String,
        require: true
    },
    precio: {
        type: Number,
        require: true
    },
    imagen: {
        type: String,
        require: false
    },
    fechaCreacion: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Producto', ProductoSchema)