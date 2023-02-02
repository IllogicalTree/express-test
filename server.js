const express = require("express");
const knockknock = require('knock-knock-jokes')

const app = express();
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))

app.get("/", (req, res) => res.send("Hello World! by express"));
app.get("/test", (req, res) => res.send("this is route 2"));
app.get("/joke", (req, res) => res.send(knockknock()));
app.get("/add", (req, res) => {
    const x = Number(req.query.x);
    const y = Number(req.query.y);
    res.send(`X + Y = ${x+y}`)
})
app.get("/calc", (req, res) => {
    const x = Number(req.query.x);
    const y = Number(req.query.y);
    const operation = req.query.operation;

    let operatorName = "";
    let result = 0;
    switch(operation) {
        case "add":
            operatorName = "plus";
            result = x + y;
            break;
        case "sub":
            operatorName = "subtract";
            result = x - y;
            break;
        case "mul":
            operatorName = "times";
            result = x * y;
            break;
        case "div":
            operatorName = "divided by"
            result = x / y;
            break;
      }
    res.send(`${x} ${operatorName} ${y} is ${result}`)
})
app.get('/getform', (req, res) => {
    const name = req.query.name;
    const quest = req.query.quest;
    res.send("Hi "+name+" I am sure you will "+quest) ;
});

app.post('/postform', (req, res) => {
    const name = req.body.name;
    const quest = req.body.quest;
    res.send("Hi "+name+" I am sure you will "+quest) ;
});

app.get('/user/:userID/books/:bookid', (req, res) => {
    const userID = req.params.userID;
    const bookID = req.params.bookID;
});

app.use((req, res) => {
    res.send("This page does not exist");
})

app.listen(8080)
//