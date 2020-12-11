const express = require("express");
const cors = require("cors");

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

const rickAndMortyRoute = require("./routes/rickAndMorty")

app.use("/", rickAndMortyRoute);


app.listen(port, () => {
    console.log("Serveur ecoute sur le port " + port);
})