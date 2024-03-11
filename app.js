require('dotenv').config()

const app = require('./config')

app.listen(app.get('PORT'), () => {})

app.get('/', (request, response) => {
  response.render('pages/home')
})

/* AAM201 */
app.get('/aam201', (request, response) => {
  response.render('pages/aam201')
})

app.get('/aam201/semester1', (request, response) => {
  response.render('aam201/semester1')
})

app.get('/aam201/semester2', (request, response) => {
  response.render('aam201/semester2')
})
/******************************************************************/

/* AAM203 */
app.get('/aam203', (request, response) => {
  response.render('pages/aam203')
})

app.get('/aam203/semester1', (request, response) => {
  response.render('aam203/semester1')
})

app.get('/aam203/semester2', (request, response) => {
  response.render('aam203/semester2')
})

/******************************************************************/

/* AAM203 */
app.get('/aam210', (request, response) => {
  response.render('pages/aam210')
})

app.get('/aam210/semester1', (request, response) => {
  response.render('aam210/semester1')
})

app.get('/aam210/semester2', (request, response) => {
  response.render('aam210/semester2')
})

/******************************************************************/

app.get('/blog', (request, response) => {
  response.render('pages/blog')
})

app.get('/about', (request, response) => {
  response.render('pages/about')
})

app.use((request, response) => {
  response.status(404)

  if (request.accepts('html')) {
    return response.redirect('/')
  }

  if (request.accepts('json')) {
    return response.send({ error: 'Not Found' })
  }

  response.type('txt').send('Not Found')
})
