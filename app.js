const express = require ("express");

const app = express();
const port = 3000;

//Static files to be used
app.use(express.static('public'));

app.listen(port, () => {
    console.log("Server listening on port ", port);
});

app.get("/", (req, res) => {
    res.sendfile("public/index.html")
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