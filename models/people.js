'use strict';
module.exports = function(sequelize, DataTypes) {
  var People = sequelize.define('People', {
    name: DataTypes.STRING,
    birthYear: DataTypes.STRING,
    gender: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        People.hasMany(models.Film);
        People.belongsTo(models.Film, {
          foreignKey: {
            allowNull: false
          }
        });
      }
    }
  });
  return People;
};