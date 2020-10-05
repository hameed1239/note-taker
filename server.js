const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const routes = require('./routes/')
// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
app.use(express.static('./public'));//this helps us serve all our assets without having to create routes for each one
app.use('/',routes);
app.listen(PORT, () => {
    console.log(`App is now listening on port ${PORT}`);
})