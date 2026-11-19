import express from 'express'
//import mongoose from 'mongoose'

/*const Animal = mongoose.model('Animal', new mongoose.Schema({
  tipo: String,
  estado: String,
}))*/

const app = express()
const puerto = 3000

//mongoose.connect('mongodb://usuario:password@servidor:puerto/miapp?authSource=admin')

app.get('/', async (_req, res) => {
  return res.send("Hola mundo modificado!")
})




app.get('/alumno:id', async (_req, res) => {
  const id = _req.params.id
  console.log(`Consultando alumno ${id}...`)
  return res.send(`Mi alumno favorito es ${id}`)
})

app.get('/buscar', async (_req, res) => {
  const nombre = _req.query.nombre
  console.log(`Consultando alumno ${nombre}...`)
  return res.send(`Te he encontrado: ${nombre}`)
})

app.get('/random', async (_req, res) => {
  const random = Math.random()
  console.log(`Generando número aleatorio ${random}...`)
  return res.send(`El número aleatorio es: ${random}`)
})

app.get('/examen:id', async (_req, res) => {
  const id = _req.params.id
  console.log(`Consultando examen ${id}...`)

  switch (id) {
    case 1:
      return res.send(`21/11/2026`)
        ;
    case 2:
      return res.send(`27/11/2026`)
        ;
    case 3:
      return res.send(`30/11/2026`)
        ;
    case 4:
      return res.send(`02/12/2026`)
        ;
    default:
      return res.send(`ID incorrecto. Solo 1-4`)
  }
})

app.get('/examenes', async (_req, res) => {
  const nombre = _req.query.nombre

  switch (nombre) {
    case "AC":
      return res.send(`21/11/2026`)
        ;
    case "PSP":
      return res.send(`27/11/2026`)
        ;
    case "DG":
      return res.send(`30/11/2026`)
        ;
    case "PM":
      return res.send(`02/12/2026`)
        ;
    default:
      return res.send(`No hay fecha para esa asignatura`)
  }
})


app.get('/suma', async (_req, res) => {
  const op1 = _req.query.op1
  const op2 = _req.query.op2
  const suma = op1 + op2
  return res.send(`Resultado de la suma: ${suma}...`)
})

app.get('/resta', async (_req, res) => {
  const op1 = _req.query.op1
  const op2 = _req.query.op2
  const resta = op1 - op2
  return res.send(`Resultado de la resta: ${resta}...`)
})

app.get('/comparar', async (_req, res) => {
  const txt1 = _req.query.txt1
  const txt2 = _req.query.txt2
  if (txt2 == txt1) {
    return res.send(`Son iguales las cadenas`)

  } else {
    return res.send(`No son iguales las cadenas`)

  }
})

//date devuelve fecha dd/mm/aa

/*app.get('/crear', async (_req, res) => {
  console.log('creando...')
  await Animal.create({ tipo: 'animalico', estado: 'Feliz' })
  return res.send('ok')
})*/

app.listen(puerto, () => console.log(`escuhando el puerto ${puerto}...`))