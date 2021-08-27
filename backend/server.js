const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

// ------DEFINE VARIABLE------//
const PORT = process.env.PORT || 4000;
const MONGO_URL = process.env.MONGO_URL;

// ---MIDDLEWARE THIRD PARTY---//
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// ----------ROUTE------------//
app.use('/api',require("./src/route/product.route"));

app.get("/", (req, res) => {
    res.status(200).json({ msg: 'ok' })
});

// ----CONNECT DB && START----//
mongoose
    .connect(MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    })
    .then(() => (
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        })
    ))
    .catch((error) => {
		console.log(error.message);
	})


