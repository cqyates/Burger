var orm = require("../config/orm.js");

var burger = {
    all: function(cb){
        orm.all('burgers', function(res){
        cb(res);
        })
    },
    update: function(id, data, cb) {
        var condition = "id=" + id
        orm.update('burgers',condition, data, cb);
    },

    create: function(name, cb) {
        orm.create('burgers', ["burger_name", "devoured"], [name, false], cb);
    }
}
module.exports = burger;