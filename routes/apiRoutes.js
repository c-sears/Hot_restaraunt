var path = require('path')
var tableData = require('../data/tableData')
var waitingData = require('../data/waitingListData')



exports.check_api_route = function(app){
    // Updates reservation array on api call
    app.post('/api/reserve', (req, res)=>{
        var new_reservation = req.body
        if(tableData.reservations.length < 5){
            tableData.reservations.push(new_reservation)
        } else {
            waitingData.waiting_list.push(new_reservation)
        }
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