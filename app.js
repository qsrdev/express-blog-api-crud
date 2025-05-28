import express from "express";
import chalk from "chalk";
import postRouter from "./routers/posts.js";
import endpointNotFound from "./middleware/endpointNotFound.js";
import errorHandler from "./middleware/serverError.js";

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

/*
Importante metterere middleware che fanno i controlli sugli errori ecc alla fine di tutto il codice.
Il codice in pagina viene eseguito partendo dall'alto verso il basso quindi ci permette di avere un ordine.
Prima la richiesta passa per tutto il resto, se non trova modo arriva a endpointnotfound oppure error
*/

//middleware di quando non trova le rotte
app.use(endpointNotFound);

//middleware di quando fai gli errori
app.use(errorHandler);

//Invoco la funzione di ascolto per la mia console
app.listen(port, () => {
  console.log(chalk.bgGreenBright("Server sul retrogaming aperto"));
});
