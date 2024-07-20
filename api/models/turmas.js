'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Turmas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // PK da tabela de origem
      // Tabela de origem está se relacionando com a tabela de destino
      // A tabela Turmas tem uma chave extrangeira em Matrículas
      Turmas.hasMany(models.Matriculas,{foreignKey:'turma_id'})

      // FK
      // Tabela Turmas tem um FK que pertence a tabela Pessoas
      Turmas.belongsTo(models.Pessoas, {foreignKey:"docente_id"})
      // Tabela Turmas tem um FK que pertence a tabela Niveis
      Turmas.belongsTo(models.Niveis, {foreignKey:'nivel_id'})
    }
  }
  Turmas.init({
    data_inicio: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Turmas',
  });
  return Turmas;
};