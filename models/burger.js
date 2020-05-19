var orm = require("../config/orm.js");
var burger = {
  all: function (cb) {
    orm.all("burger", function (res) {
      cb(res);
    });
  },
  create: function (name, cb) {
    orm.create("burger", [
      "name", "devour"
    ], [
      name, false
    ], cb);
  },
  update: function (id, cb) {
    console.log('uynguygfdesw')
    var condition = "id=" + id;
    orm.update("burger", {
      devour: true
    }, condition, cb);
  }
};

// Export the database functions for the controller (Controller.js).
module.exports = burger;
