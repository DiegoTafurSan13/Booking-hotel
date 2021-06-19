const express = require('express');
const router = require('./network/router'); 
const cors = require('cors');
const mongoose = require('./db');

require('dotenv').config();
const {MONGOOSE_LOCALHOST,MONGOOSE_COLLECTION} = process.env;
const URI = `mongodb://${MONGOOSE_LOCALHOST}/${MONGOOSE_COLLECTION}`;

var app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

router(app);
mongoose(URI);

app.use('/app',express.static('./src/public'));

app.listen( 3000 , () => {
    console.log(`el servidor esta escuchando en el PORT http://localhost:${3000}`);
});