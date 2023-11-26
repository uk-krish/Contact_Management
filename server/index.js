const express = require('express');
const app = express();
const env = require('dotenv');
env.config();
const port = process.env.PORT;
//Middle Ware
app.use(express.json());

app.use("/contact", require('./Router/ContactRouter'))
app.listen(port, () => {
    console.log(`Listening port is ${port}`);
})