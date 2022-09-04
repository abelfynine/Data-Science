//Dentro del package.json
//se agrego -> "type": "module",
//importamos express
import express from 'express'
//join es para concatenar los directorios
import {dirname, join} from 'path'
import {fileURLToPath} from 'url'
import indexRoutes from './routes/index.js'
//import ejs from 'ejs'

const app = express()

//se pone asi para no usar la ruta absoluta
//es para obtener la ruta absoluta
const __dirname = dirname(fileURLToPath(import.meta.url))
console.log(join(__dirname, 'views'))
//configuracion views, es para decirle donde se encuentra
//la carpeta de las vistas
app.set('views', join(__dirname, 'views'))
//motor de plantilla
app.set('view engine', 'ejs')
//es para utilizar el routes
app.use(indexRoutes)
//main.css
app.use(express.static(join(__dirname, 'public')))

app.listen(3000)
console.log('Server is listening on port', 3000)
