const express = require('express')
const app = express()
const port = 5500
const bodyParser = require('body-parser');
const config = require("./config/key");


const { User } = require("./models/User");

//application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));
//application/json
app.use(bodyParser.json());

const mongoose = require('mongoose');
mongoose.connect(config.mongoURI, {})
  .then(() => console.log("MongoDB 연결성공!"))
  .catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World!!!! 시작!!! 노드몬 개꿀?')
})


app.post('/register', (req, res) => {

  // 회원가입시 필요한 정보를 클라이언트에서 가져와서 
  // 그것을 데이터베이스에 넣어준다.
  const user = new User(req.body)

  user.save()
  .then(result => {
    console.log(result);
  })
  .catch(err => {
    console.error(err);
  });

})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})