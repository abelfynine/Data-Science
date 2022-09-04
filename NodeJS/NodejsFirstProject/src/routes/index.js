//esto es para indicar que no tenemos
//toda la aplicacion sino una parte
import {Router} from 'express'
const router = Router()
//creamos nuestra primera ruta, url
//res.render('index') = renderiza un archivo html que va estar apartir del archivo index.ejs
router.get('/', (req,res) => res.render('index', {title: 'First Website with NodeJs'}))
router.get('/about', (req,res) => res.render('about', {title: 'About Me'}))
router.get('/contact', (req,res) => res.render('contact', {title: 'Contact'}))

export default router
