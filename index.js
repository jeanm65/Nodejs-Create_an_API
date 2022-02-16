const express = require('express')
const app = express();
require('./models/dbConfig') // we need the dbconfig in our index.js file
const bodyParser = require('body-parser')

const postsRoutes = require('./routes/postsController') // we want that our route (controller) is only accessible in our index.js file
 app.use(bodyParser.json())

app.use('/posts', postsRoutes);



app.listen(5500, () => {
  console.log('server started: 5500')
})