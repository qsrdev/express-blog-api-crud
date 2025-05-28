function errorHandler(err, req, res, next) {
  //err è una funzione specifica di express
  console.log("errore", err);
  res.status(500).json({
    error: "Errore interno del server",
  });
}

export default errorHandler;
