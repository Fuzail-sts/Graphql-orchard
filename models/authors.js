// const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('authors', {
    AuthorID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    FirstName: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    LastName: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    DOB: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'authors',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "AuthorID" },
        ]
      },
    ]
  });
};
