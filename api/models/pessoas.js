'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pessoas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // PK da tabela de origem
      // Tabela de origem está se relacionando com a tabela de destino
      // A tabela Pessoas tem uma chave extrangeira em Turmas
      Pessoas.hasMany(models.Turmas, {foreignKey: 'docente_id'})
      // A tabela Pessoas tem uma chave extrangeira em Matriculas
      Pessoas.hasMany(models.Matriculas, {foreignKey: 'estudante_id'})
    }
  }
  Pessoas.init({
    nome: DataTypes.STRING,
    ativo: DataTypes.BOOLEAN,
    email: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pessoas',
  });
  return Pessoas;
};