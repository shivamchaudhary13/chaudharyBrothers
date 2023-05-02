const express = require('express');
const routers = require('./src/routes');
const app = express();
var bodyParser = require('body-parser')
const port = process.env.PORT || 3000
app.use( bodyParser.json() );       
app.use(bodyParser.urlencoded({     
    extended: true
}));

app.use('/api',routers);

app.listen(port,() => {
    console.log(`http://localhost:`+port);
})