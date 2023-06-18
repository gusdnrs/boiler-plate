const express = require('express')
const app = express()
const port = 5500

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://gusdnrs:053105@react.pzhxwtk.mongodb.net/?retryWrites=true&w=majority', {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
  // useFindAndModify: false
}).then(() => console.log("MongoDB 연결성공!"))
  .catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World!!!! 안녕 node 세상아!!!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})