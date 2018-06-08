var path = require('path')
var bodyParser = require('body-parser')
var tableData = require('../data/tableData')
var waitingData = require('../data/waitingListData')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

exports.check_route = function(app){
    // Updates reservation array on api call
    app.post('/api/reserve', (req, res)=>{
        var new_reservation = req.body
        console.log(new_reservation)
    })
    // Return array of reservation objects on api call
    app.get('/api/tables', (req, res)=>{
        res.send(tableData.reservations)
    })
    // Return array of waiting list objecs on api call
    app.get('/api/waiting', (req, res)=>{
        res.send(waitingData.waiting_list)
    })
}