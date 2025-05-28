import express from "express";
import postsController from "../controller/postsController.js";
import errorHandler from "../middleware/serverError.js";

const router = express.Router();

//lettura tutte le console //INDEX
router.get("/", postsController.index);

//lettura singola console //SHOW
router.get("/:id", postsController.show);

//creazione post //STORE
router.post("/", postsController.store);

//modifica post post //UPDATE
router.put("/:id", postsController.update);

//cancellazione // DESTROY
router.delete("/:id", postsController.destroy);

export default router;
