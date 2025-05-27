import consoleArray from "../data/array.js";

//Index
const index = (req, res) => {
  const consoleFilter = req.query.tags;

  let result = consoleArray;

  if (consoleFilter !== undefined) {
    result = consoleArray.filter((curConsole) => curConsole.tags.includes(consoleFilter));
  }

  res.json({
    data: result,
    count: result.length,
    success: true,
  });
};

// Show
const show = (req, res) => {
  const consoleID = parseInt(req.params.id);
  const thatConsole = consoleArray.find((curConsole) => curConsole.id == consoleID);

  //piccolo debug in caso di console non trovata
  if (!thatConsole) {
    return res.status(404).json({ error: "Console non trovata" });
  } else {
    //il motivo per cui devo separare console è che thatconsole è dentro una stringa
    //potrei utilizzare JSON.stringify() ma siccome non lo abbiamo visto faccio cosi
    res.json({
      data: `Invio dati della console con id ${consoleID}`,
      console: thatConsole,
    });
  }
};

// Store
const store = (req, res) => {
  //dall'api prelevo il body in questo caso il nostro oggetto PSP
  const newConsole = req.body;
  console.log(newConsole);

  //per far si che l'id sia aggiornato bene, utilizzo questa riga di comando
  //per prendere l'id dell'ultimo oggetto nell'array delle console
  const lastId = parseInt(consoleArray[consoleArray.length - 1].id);

  //l'id della nuova console è il nostro ultimo id + 1
  newConsole.id = (lastId + 1).toString;
  //pusho il tutto nell'array
  consoleArray.push(newConsole);

  //il metodo funziona per 1 oggetto alla volta

  //status 201 vuol dire richiesta di aggiunta
  res.status(201).json({
    data: `Aggiungo una nuova console alla libreria con id n. ${newConsole.id}`,
  });
};

// Update
const update = (req, res) => {
  const consoleID = req.params.id;
  res.json({
    data: `Modifico i dati della console con id ${consoleID}`,
  });
};

// Destroy
const destroy = (req, res) => {
  const consoleID = req.params.id;

  const thatConsole = consoleArray.findIndex((curConsole) => curConsole.id == consoleID);

  if (thatConsole === -1) {
    res.status(404).json({
      errore: `Console non trovata`,
    });
  } else {
    consoleArray.splice(thatConsole, 1);
    res.status(200).json({
      data: `cancellato il gioco n${consoleID}`,
    });
  }
};

export default { index, show, store, update, destroy };
