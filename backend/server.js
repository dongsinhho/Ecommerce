const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.status(200).json( {msg: 'ok'} )
});

app.listen(8080, () => {
    console.log("Server running on port 8080");
})