const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json())

app.get('/', (req, res) => {
    res.send("Wow. I'm Excited nodejs start")
});
const users = [
    { id: "0", name: "Abul", age: "25", email: "abul@gmail.com", phone: "01799999999" },
    { id: "1", name: "Bilal", age: "35", email: "billal@gmail.com", phone: "01799999999" },
    { id: "2", name: "Kabul", age: "26", email: "kabul@gmail.com", phone: "01799999999" },
    { id: "3", name: "Rohim", age: "27", email: "rohim@gmail.com", phone: "01799999999" },
    { id: "4", name: "Jack", age: "25", email: "jack@gmail.com", phone: "01799999999" },
    { id: "5", name: "Sokina", age: "21", email: "sokina@gmail.com", phone: "01799999999" }
]

// use query prameter 
app.get('/users', (req, res) => {
    const search = req.query.search;
    if (search) {
        const serchResult = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(serchResult)
    } else {
        res.send(users)
    }

});

// use dynamic api 
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
})

app.post("/users", (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser)
    console.log("heatting the post", req.body);
    // res.send("insite the post")
    res.json(newUser)
})

app.listen(port, () => {
    console.log("Exaple node listener", port)
})