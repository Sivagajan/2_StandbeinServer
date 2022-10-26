import './config.js'
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import { getAllOrderController } from './controller/orderController.js'
import { getAllProductController } from './controller/productController.js'
import { loginController } from './controller/userController.js'
import { encrypt } from './middleware/encryptMiddleware.js'


// Falls ihr multer oder den express validator nutzt, importiert diese einfach auch
const PORT = process.env.PORT
const app = express()

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())

// hier ist genung Platz für alle eure Routen
app.get('/', (req,res) => {
    res.status(200).send('Alles OKAY')
})

app.get('/admin/product',getAllProductController)
app.get('/admin/order',getAllOrderController)

app.post('/admin',encrypt, loginController)

// dann werfen wir den Server mal an
app.listen(PORT, () => console.log('Server runs on Port:', PORT))