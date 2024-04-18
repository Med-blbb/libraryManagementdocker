import { Router } from "express";
import LivreModel from "../models/Livre.js";
const route = Router();

route.post('/:idLivre', async (req, res) => {

    const idLivre = req.params.idLivre
    const { code, titre, desciption, auteur } = req.body
    const livre = new LivreModel({ code, titre, desciption, auteur })
    await livre.save()
    res.send(livre)
})

export default route