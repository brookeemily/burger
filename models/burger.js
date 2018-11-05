// Import orm.js
// this is needed to create functions that will interact with the burger database
var orm = require("../config/orm");

// Create the code that will call the ORM functions using burger specific input for the ORM
var burger = {
    all: function(cb) {
        orm.all("burgers", function(res){
            cb(res);
        });
    },
    create: function(cols, vals, cb) {
        orm.create("burgers", cols, vals, function(res){
            cb(res);
        });
    },
    update: function(objColVals, condition, cb) {
        orm.update("burgers", objColVals, condition, function(res) {
            cb(res);
        });
    },
    delete: function(condition, cb) {
            orm.delete("burgers", condition, function(res) {
                cb(res);
            });
    }
};



// export at the end of the file
module.exports = burger;