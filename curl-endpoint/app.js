const express = require('express')
const app = express()
const port = 3000
// define public dir as file root, dependent on entrypoint
app.use(express.static('public'))
//to test, call browser to http://localhost:3000/images/kitten.jfif

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.put('/user', function (req, res) {
    res.send('Got a PUT request at /user')
})

app.use(express.static('public'))

app.post('/', function (req, res) {
    res.send('Got a POST request')
})

app.delete('/user', function (req, res) {
    res.send('Got a DELETE request at /user')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})