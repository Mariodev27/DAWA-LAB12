const express = require('express');
const bodyParser = require('body-parser');
const multipart = require('connect-multiparty');
const cors = require('cors');

const PORT = 3000;
const app = express();

app.use(cors());

const multiPartMiddelware = multipart({
    uploadDir: './imagenes'
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.post('/api/upload', multiPartMiddelware, (req, res) => {
    res.json({
        'message': 'Fichero subido correctamente.....!!!'
    })
})

app.get('/', (req, res) => {
    res.send('Hola Mundo....!!!');
});

app.listen(3000, () => console.log(`Servidor corriendo en puerto ${PORT}`));