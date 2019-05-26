const connection = require("./connection.js");

var orm = {
    all: function (tableInput, cb) {
        var queryString = 'SELECT * FROM ' + tableInput + ';';
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            cb(result)
        })
    },
    update: function (tableInput, condition, data, cb) {
        var sqlQuery = "UPDATE " + tableInput +
            " SET " + objToSql(data) +
            " WHERE " + condition

        connection.query(sqlQuery, function (err, result) {
            if (err) throw err;
            cb(result);
        })
    },


    create: function (tableInput, cols, vals, cb) {
        console.log(vals)
        var sqlQuery =  "INSERT INTO " + tableInput + 
                        " (" + cols.toString() + ")" + 
                        " VALUES (" + printQuestionMarks(vals.length) + ")"

                        console.log(sqlQuery)
        connection.query(sqlQuery, function (err, result) {
            if (err) throw err;
            cb(result);
        })
    }

}

function objToSql(ob) {
    var arr = [];
  
    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
      var value = ob[key];
      if (Object.hasOwnProperty.call(ob, key)) {
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }

        arr.push(key + "=" + value);
      }
    }
    return arr.toString();
  }
  
function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num.length; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }
  


module.exports = orm