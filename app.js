const express = require('express');
const chalk = require('chalk'); // If using chalk@4, this works
const debug = require('debug')('app');
const morgan = require('morgan'); // Added morgan
const app = express();
const port = 3000;

app.use(morgan('combined'));

app.get("/", (req, res) => {
    res.send('index',{username: 'Praguy554', customers: ["kit1112","kitto",]});
});

app.listen(port, () => {
    debug("Listening on port " + chalk.green(":" + port));
});
