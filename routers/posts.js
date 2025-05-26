import express from "express";
const router = express.Router();

const consoles = [
  {
    id: 1,
    titolo: "Game Boy Advance: La Rinascita del Gioco Portatile",
    contenuto: "Il Game Boy Advance ha rivoluzionato il gioco portatile nei primi anni 2000. Con titoli iconici come 'Metroid Fusion' e 'The Legend of Zelda: The Minish Cap', ha segnato un'epoca.",
    immagine: "./imgs/gba.jpg",
    tags: ["Game Boy Advance", "Nintendo", "Retrogaming", "Portatile"],
  },
  {
    id: 2,
    titolo: "Game Boy SP: Stile e Illuminazione in un'unica console",
    contenuto: "Il Game Boy Advance SP ha introdotto un design a conchiglia e uno schermo retroilluminato, cambiando per sempre l'esperienza di gioco portatile.",
    immagine: "./imgs/gbasp.jpg",
    tags: ["Game Boy SP", "Nintendo", "Retro", "Hardware"],
  },
  {
    id: 3,
    titolo: "PlayStation 2: L’Impero dei JRPG e dei Platform",
    contenuto: "La PS2 ha una delle librerie più vaste di sempre, con capolavori come 'Shadow of the Colossus' e 'Final Fantasy X'. Un pilastro del retrogaming moderno.",
    immagine: "./imgs/ps2.jpg",
    tags: ["PlayStation 2", "Sony", "JRPG", "Platform", "Retrogaming"],
  },
  {
    id: 4,
    titolo: "Nintendo DS: Due Schermi, Infinite Possibilità",
    contenuto: "Con il touch screen e giochi come 'The World Ends With You' e 'New Super Mario Bros', il DS ha ridefinito il concetto di portatile.",
    immagine: "./imgs/ds.jpg",
    tags: ["Nintendo DS", "Touch", "Innovazione", "Retro", "Nintendo"],
  },
  {
    id: 5,
    titolo: "Xbox 360: Il salto nella generazione HD",
    contenuto: "L'Xbox 360 ha segnato l’inizio dell’era HD con titoli come 'Halo 3' e 'Gears of War', ed è ancora molto amato nella scena del retrogaming moderno.",
    immagine: "./imgs/xbox360.jpg",
    tags: ["Xbox 360", "Microsoft", "HD", "FPS", "Retrogaming"],
  },
];

//lettura tutte le console //INDEX
router.get("/", (req, res) => {
  res.json({
    data: consoles,
    count: consoles.length,
    success: true,
  });
});

//lettura singola console //SHOW
router.get("/:id", (req, res) => {
  const consoleID = parseInt(req.params.id);
  const thatConsole = consoles.find((curConsole) => curConsole.id == consoleID);

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
});

//creazione post //STORE
router.post("/", (req, res) => {
  res.json({
    data: "Aggiungo una nuova console alla libreria",
  });
});

//modifica post post //UPDATE
router.put("/:id", (req, res) => {
  const consoleID = req.params.id;
  res.json({
    data: `Modifico i dati della console con id ${consoleID}`,
  });
});

//cancellazione // DESTROY
router.delete("/:id", (req, res) => {
  const consoleID = req.params.id;
  res.json({
    data: `Cancello la console con id ${consoleID}`,
  });
});

export default router;
