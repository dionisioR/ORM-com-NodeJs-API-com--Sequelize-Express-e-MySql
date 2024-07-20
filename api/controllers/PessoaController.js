const { where } = require("sequelize");
const database = require("../models");

class PessoaController {
  // selectAll
  static async pegaTodasAsPessoas(req, res) {
    try {
      const todasAsPessoas = await database.Pessoas.findAll();
      res.status(200).json(todasAsPessoas);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // SelectId
  static async pegaUmaPessoa(req, res) {
    const { id } = req.params;
    try {
      const umaPessoa = await database.Pessoas.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(umaPessoa);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  // insert
  static async criaPessoa(req, res) {
    const novaPessoa = req.body;
    try {
      // daria para fazer somente com a linha de baixo mas neste caso não teríamos nenhum feedback
      //await database.Pessoas.create(novaPessoa)

      // da maneira a seguir teremos uma resposta no terminal (ou no postman / thunder) em forma de json
      const novaPessoaCriada = await database.Pessoas.create(novaPessoa);
      return res.status(200).json(novaPessoaCriada);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  // update
  static async atualizaPessoa(req, res) {
    const { id } = req.params;
    const novasInfos = req.body;
    try {
      // por padrão o método update retorna 0 / 1
      await database.Pessoas.update(novasInfos, { where: { id: Number(id) } });

      // para sabermis se os dados foram atualizado vamos fazer da seguinte maneira
      const pessoaAtualizada = await database.Pessoas.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(pessoaAtualizada);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  // delete
  static async apagaPessoa(req, res) {
    const { id } = req.params;
    try {
      await database.Pessoas.destroy({ where: { id: Number(id) } });
      return res.status(200).json({ message: `id ${id} deletado` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  //------------------------------------------------------------
  // Buscando uma matrícula
  //------------------------------------------------------------
  // http://localhost:3000/pessoas/1/matricula/5
  // http://localhost:3000/pessoas/:estudanteId/matricula/:matriculaID
  static async pegaUmaMatricula(req, res) {
    const { estudanteId, matriculaId } = req.params;
    try {
      const umaMatricula = await database.Matriculas.findOne({
        where: { id: Number(matriculaId), estudante_id: Number(estudanteId) },
      });
      return res.status(200).json(umaMatricula);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async criaMatricula(req, res) {
    const { estudanteId } = req.params;
    const novaMatricula = { ...req.body, estudante_id: Number(estudanteId) };
    try {
      const novaMatriculaCriada = await database.Matriculas.create(
        novaMatricula
      );
      return res.status(200).json(novaMatriculaCriada);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async atualizaMatricula(req, res) {
    const { estudanteId, matriculaId } = req.params;
    const novasInfos = req.body;
    try {
      await database.Matriculas.update(novasInfos, {
        where: { id: Number(matriculaId), estudante_id: Number(estudanteId) },
      });
      const matriculaAtualizada = await database.Matriculas.findOne({
        where: { id: Number(matriculaId) },
      });
      return res.status(200).json(matriculaAtualizada);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async selectAllMatricula(req, res) {
    try {
      const todasAsMatriculcas = await database.Matriculas.findAll();
      res.status(200).json(todasAsMatriculcas);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async apagarMatricula(req, res){
    const { estudanteId, matriculaId } = req.params;
    try {
      await database.Matriculas.destroy({
        where: { id: Number(matriculaId), estudante_id: Number(estudanteId) },
      });
      return res.status(200).json({ message: `id ${matriculaId} deletado` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = PessoaController;
