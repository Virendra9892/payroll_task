'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class jobs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      jobs.belongsToMany(models.users,{through:"user_jobs"});
      jobs.belongsTo(models.users,{foreignKey:"recruiterId"})
    }
  }
  jobs.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    recruiterId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'jobs',
  });
  return jobs;
};