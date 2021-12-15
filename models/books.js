// const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('books', {
    BookID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    BookTitle: {
      type: DataTypes.STRING(35),
      allowNull: false
    },
    EditionNumber: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    TotalPages: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'books',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "BookID" },
        ]
      },
    ]
  });
};
