const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const server = express()
const PORT = process.env.PORT || 5000;

server.use(cors());
server.use(express.json());
server.use(express.static(path.join(__dirname, "../client/dist")));

server.route("/data")
    .get((req, res) => {
        res.json(require("./data.json"));
    })
    .post((req, res) => {
        const data = require("data.json");
        data.psuh(req.body);
        fs.writeFileSync("./data.json", JSON.stringify(data));
        res.sendStatus(200).send('OK')
    })

server.route("/image/:id")
    .get((req, res) => {
        res.sendFile(path.join(__dirname, `./images/${req.params.id}`), (err) => {
            if (err) {
                console.log(err);
                res.sendStatus(err.status).end();
            } else {
                console.log(`send file: ${req.params.id}`);
            }
        })
    })

server.listen(PORT, () => {
    console.log(`server started at port ${PORT}...`);
})