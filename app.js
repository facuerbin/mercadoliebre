const express = require ("express");

const app = express();
const port = 3000;

app.listen(port, () => {
    console.log("Server listening on port ", port);
});

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/productos", (req, res) => {
    res.send("Productos");
});

app.get("/acerca_de", (req, res) => {
    res.send("Acerca de..");
});

app.get("/contactos", (req, res) => {
    res.send("Contactos");
});