const router = require("express").Router();

router.get("/", (req, res, next) => res.render("index"))


// Route params (ejemplo básico 1)
router.get('/vuelos/origen/:from_city/destino/:to_city/:date', (req, res) => {

  const { from_city, to_city, date } = req.params

  console.log('--------------')
  console.log('Estos son los route params:', req.params)
  console.log(`Debes, por tanto, mandar a la BBDD una consulta para vuelos de ${from_city} a ${to_city} para el día ${date}`)
  console.log('--------------')

  res.send('ABRE LA TERMINAL PARA VER LOS ROUTE PARAMS, MERLUZ@')
})



// Route params (ejemplo básico 2)
router.get('/usuarios/:username', (req, res) => {

  const { username } = req.params

  console.log('--------------')
  console.log('Estos son los route params:', req.params)
  console.log(`Debes, por tanto, traer de la BD los detalles del usuario ${username}`)
  console.log('--------------')

  res.send('ABRE LA TERMINAL PARA VER LOS ROUTE PARAMS, MERLUZ@')
})




// Query strings (example 1)
router.get('/tienda', (req, res) => {

  const { clothe, color, season, size } = req.query

  console.log('--------------')
  console.log('Estos son los query strings:', req.query)
  console.log(`Debes, por tanto, mostrar los ${clothe} de color ${color}, talla ${size} y temporada ${season}`)
  console.log('--------------')

  res.send('ABRE LA TERMINAL PARA VER LOS QUERY STRINGS, MERLUZ@')
})





// GET Form rendering
router.get('/buscador', (req, res) => {
  res.render('search-form')
})

// GET Form handling
router.get('/resultados', (req, res) => {
  console.log('Por si acaso te dejo por aqui los query string, pilla --->', req.query)
  res.render('search-results', req.query)
})





// POST Form rendering
router.get('/registro', (req, res) => {
  res.render('signup-form')
})

// POST Form handling
router.post('/registro', (req, res) => {
  const { username, password } = req.body
  res.send(`El nombre de usuario es ${username} y la contraseña ${password}, aunque no se muestran en la URL`)
})



module.exports = router;
