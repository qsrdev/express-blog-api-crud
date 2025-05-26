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
  res.json({
    data: "Aggiungo una nuova console alla libreria",
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

  const thatConsole = consoleArray.find((curConsole) => curConsole.id == consoleID);

  if (thatConsole === -1) {
    res.status(404);
    res.json({
      errore: `Console non trovata`,
    });
  }

  consoleArray.splice(thatConsole, 1);
  res.sendStatus(204);
  res.json({
    data: `cancellato il gioco n ${consoleID}`,
  });
};

export default { index, show, store, update, destroy };
