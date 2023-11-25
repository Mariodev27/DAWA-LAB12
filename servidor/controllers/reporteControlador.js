const PDFDocument = require('pdfkit');
const fs = require('fs');
const conectarDB = require('../config/db'); 
const Producto = require('../models/Producto'); 

const generarPDF = async () => {
    try {
        await conectarDB();

        const productos = await Producto.find({});

        const doc = new PDFDocument;
        doc.pipe(fs.createWriteStream('MisProductos.pdf'));

        productos.forEach(producto => {
            doc.text(`Producto: ${producto.producto}`);
            doc.text(`Categoría: ${producto.categoria}`);
            doc.text(`Descripción: ${producto.descripcion}`);
            doc.text(`Precio: ${producto.precio}`);
            doc.text(`-------------------------`);
        });

        doc.end();
        console.log('PDF generado con éxito');
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

module.exports = generarPDF;