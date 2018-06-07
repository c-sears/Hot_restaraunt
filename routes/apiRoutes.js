const path = require('path')

exports.check_route = function(route, app){
    switch(route){
        case '/':
            return app.get(path.join(__dirname, 'home.html'))
    }
}