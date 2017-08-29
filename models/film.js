'use strict';
module.exports = function(sequelize, DataTypes) {
  var Film = sequelize.define('Film', {
    title: DataTypes.STRING,
    episodeId: DataTypes.INTEGER,
    openingCrawl: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Film.hasMany(models.People);
        Film.belongsTo(models.People, {
          foreignKey: {
            allowNull: false
          }
        });
      }
    }
  });
  return Film;
};