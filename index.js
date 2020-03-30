const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))

const todo = require('./routes/todo');
app.use(todo);

app.get("/", (req, res, next) => {
    res.send("hi");
})


app.listen(80, () => {
    console.log(`server running at port 3000`);
})
// dfsadf
// http port 80 이 기본 
// https => 433
// /todo