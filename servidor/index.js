const express = require('express');
const conectarDB = require('./config/db')
const config = require('./config/global');
const bodyParser = require('body-parser');
const multipart = require('connect-multiparty');
const cors = require('cors');

const app = express();

//Conectar BD
conectarDB();

app.use(cors())

app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

const multiPartMiddelware = multipart({
    uploadDir: 'mongodb://127.0.0.1:27017/simplejwt/imagen'
});



app.use('/api/productos', multiPartMiddelware,require('./routes/producto'));
app.use('/api/login', require('./routes/usuario'));
app.use('/api/create-user', require('./routes/usuario'));



app.listen(config.port, () => {
    console.log('El servidor por el puerto 4000')
})