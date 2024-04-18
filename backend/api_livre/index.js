import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import LivreRoutes from './routes/LivreRoutes.js'

dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())

const port = process.env.PORT || 3000
const url = process.env.URL_DBLIVRES

mongoose.connect(url)
.then(() => {
    console.log('Connected to MongoDB')
})

app.use('/livre', LivreRoutes)

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})