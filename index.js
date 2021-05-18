const express = require('express');
const bodyParser = require('body-parser');
const routesHandler = require('./routes/handler.js');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv/config');

mongoose.connect(process.env.DB_URI || 'mongodb+srv://HUYDQ184271:huycoihthd123@cluster0.cmcyc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
})
.then( () => {
    console.log('DB connected');
})
.catch( (err) => {
    console.log(err);
})

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());
app.use('/',routesHandler);

const PORT = process.env.PORT || 4000;

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('frontend/build'))
  
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html')) // relative path
    })
  }

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
})