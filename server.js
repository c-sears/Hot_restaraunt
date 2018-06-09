var express = require("express");
var bodyParser = require("body-parser");
var { check_api_route } = require('./routes/apiRoutes')
var { check_html_route } = require('./routes/htmlRoutes')

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

check_html_route(app)
check_api_route(app)

app.listen(PORT, () =>{
    console.log(`Listening on port ${PORT}`)
})
