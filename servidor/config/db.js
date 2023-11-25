const mongoose = require('mongoose');

const conectarDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://Mariodev27:Tecsup@cluster0.in2eznp.mongodb.net/?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log(`BD conectada`);

    } catch (error) {
        console.log(error);
        process.exit(1); //Detiene la app
    }
}

module.exports = conectarDB