const express = require('express')
const app = express()

 app.use(express.static("public"));

app.set("view engine", "ejs");

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('App running on port', PORT)
})



const storeRouter = require('./routes/stores')

app.use('/store', storeRouter)

app.use((req, res) => {
  res.render("./home");
});