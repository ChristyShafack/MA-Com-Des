require('dotenv').config()

const app = require('./config')

app.listen(app.get('PORT'), () => {})

app.get('/', (request, response) => {
  response.render('pages/home')
})

app.get('/aam201', (request, response) => {
  response.render('pages/aam201')
})

app.get('/aam203', (request, response) => {
  response.render('pages/aam203')
})

app.get('/aam210', (request, response) => {
  response.render('pages/aam210')
})

app.get('/blogs', (request, response) => {
  response.render('pages/blogs')
})

app.get('/about', (request, response) => {
  response.render('pages/about')
})

// app.get('/projects/portraits', (request, response) => {
//   response.render('projects/portraits')
// })

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
