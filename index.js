const express = require('express')
const app = express();
require('./models/dbConfig') // we need the dbconfig in our index.js file
const bodyParser = require('body-parser');
 
// install the module 'cors', it allows our users and others to access our api.

// const cors = require('cors')





const postsRoutes = require('./routes/postsController') // we want that our route (controller) is only accessible in our index.js file
 app.use(bodyParser.json())

 // app.use(cors());
 // if we want to specify only special user to access our api:
 // app.use({origin: 'url of user'})

app.use('/posts', postsRoutes);



app.listen(5500, () => {
  console.log('server started: 5500')
})