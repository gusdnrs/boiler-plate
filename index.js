const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://hyeon9136:053105a@hyeon9136.ieona.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
  // mongoose 6.0 이후부터는 아래 옵션은 기본값으로 설정되기 때문에 해당 옵션을 추가하는 경우 오류메시지가 출력된다.
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
  // useCreateIndex: true,
  // useFindAndModify: false
}).then(() => console.log('Mongo DB Connected!!!!!!'))
  .catch(err => console.log(err))

// 몽고 db username : hyeon9136 pw: 053105a 


app.get('/', (req, res) => {
  res.send('노드 js 학습 시작!!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
})