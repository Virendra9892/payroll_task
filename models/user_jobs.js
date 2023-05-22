'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_jobs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      user_jobs.belongsTo(models.users,{foreignKey:'userId',as:'user'})
      user_jobs.belongsTo(models.jobs,{foreignKey:'jobId',as:'job'})
    }
  }
  user_jobs.init({
    userId: DataTypes.INTEGER,
    jobId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'user_jobs',
  });
  return user_jobs;
};