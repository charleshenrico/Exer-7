const express = require('express')
const app = express()

app.use(express.static('static'))
app.listen(3002,  () => {console.log('Server Started at port 3002')})