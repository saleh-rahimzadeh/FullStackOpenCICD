const express = require('express')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.get('/health', (req, res) => {
  res.send('ok')
})

app.get('/version', (req, res) => {
  res.send('3')
})

app.get('/saleh', (req, res) => {
	res.send('Hi Saleh!')
})

app.listen(PORT, () => {
  /* eslint-disable no-console */
  console.log('server started on port 5000')
  /* eslint-enable no-console */
})
