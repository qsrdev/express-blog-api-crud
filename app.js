import express from "express";
import chalk from "chalk";
import postRouter from "./routers/posts.js";
import endpointNotFound from "./middleware/endpointNotFound.js";

//Apro le porte e inizializzo il server
const app = express();
const port = 3000;

//Permetto alla cartella public di essere pubblica così posso fare le ricehiste per il contenuto tramite API
app.use(express.static("public"));

//registro il body parser per l'applicazione
app.use(express.json());

//ROTTE
app.get("/", (req, res) => {
  res.json({
    data: "Benvenuti nelle API di Retrogames.com",
  });
});

//ogni volta che chiamo posts va a prendere dentro a quel router le informazioni
app.use("/posts", postRouter);

//middleware di quando non trova le rotte
app.use(endpointNotFound);

//Invoco la funzione di ascolto per la mia console
app.listen(port, () => {
  console.log(chalk.bgGreenBright("Server sul retrogaming aperto"));
});
