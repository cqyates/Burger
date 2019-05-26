const connection = require("./connection.js");

var orm = {
    all: function(tableInput, cb) {
        connection.query("SELECT * FROM " +tableInput+";", function(err, res
        ){
         if(err) throw err;
         cb(res)

        })
    },
    update: function(tableInput, condition, cd) {
        connection.query('UPDATE ' +tableInput+' SET devoured=true WHERE id=' +condition+';', function(err,result){
            if(err) throw err;
            cb(res);
        })
    }
}
module.exports = orm