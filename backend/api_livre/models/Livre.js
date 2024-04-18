import mongoose from 'mongoose'

const LivreMoel = new mongoose.Schema({
    code :{
        type: String,
        unique: true,
        required: true
    },
    titre: {
        type: String,
        required: true,
        unique: true
    },
    desciption: String,
    auteur: {
        type: String,
        required: true
    }
})

export default mongoose.model('livre', LivreMoel)