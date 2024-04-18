import { Router } from "express";
import LivreModel from "../models/Livre.js";
const route = Router();

route.get('/:idLivre', async (req, res) => {

    const idLivre = req.params.idLivre
try {
    const livre = await LivreModel.findById(idLivre)
    res.send(livre)
} catch (err) {
    res.send(err)
}   
} 
)
route.post('/addlivre', async (req, res) => {
    const newLivre = req.body
    try {
        const result = await LivreModel.create(newLivre)
        res.send(result)
    } catch (err) {
        res.send(err)
    }
})

export default route