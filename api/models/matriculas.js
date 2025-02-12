'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Matriculas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Tabela Matriculas tem um FK que pertence a tabela Pessoas
      Matriculas.belongsTo(models.Pessoas, {foreignKey:'estudante_id'})
      // Tabela Matriculas tem um FK que pertence a tabela Turmas
      Matriculas.belongsTo(models.Turmas, {foreignKey: 'turma_id'})
    }
  }
  Matriculas.init({
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Matriculas',
  });
  return Matriculas;
};