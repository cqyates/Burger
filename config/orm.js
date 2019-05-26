const connection = require("./connection.js");

var orm = {
    all: function(tableInput, cb) {
        connection.query("SELECT * FROM " +tableInput+";", function(err, res
        ){
         if(err) throw err;
         cb(result)

        })
    }
}
module.exports = orm