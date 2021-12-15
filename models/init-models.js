var DataTypes = require("sequelize").DataTypes;
var _authors = require("./authors");
var _books = require("./books");

function initModels(sequelize) {
  var authors = _authors(sequelize, DataTypes);
  var books = _books(sequelize, DataTypes);


  return {
    authors,
    books,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
