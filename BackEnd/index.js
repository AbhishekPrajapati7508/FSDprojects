const express = require('express')

require('dotenv').config()
const app = express()
const PORT = process.env.PORT||3001
console.log(PORT)


app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(process.env.port, ()=>{
    console.log("started",PORT);
});



/* add 
commit
push
git pull to pull all changes in remote 
 incoming
 current 
 staged changes
*/