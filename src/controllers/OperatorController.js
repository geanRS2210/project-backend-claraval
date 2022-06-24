import Operator from '../models/Operator';

class OperatorController {
  async store(req, res) {
    try {
      // const operator = new Operator();
      const newUser = await Operator.create(req.body);
      const { user, password, level } = newUser;
      // const { user } = newCreate;
      res.json({ user, password, level });
    } catch (e) {
      console.log(e);
    }
  }

  async index(req, res) {
    try {
      const operators = await Operator.findAll({
        attributes: ['id', 'user', 'level'],
        order: [['id', 'ASC']],
      });
      return res.json(operators);
    } catch (e) {
      return res.status(400).json({ e });
    }
  }

  async show(req, res) {
    try {
      const operator = await Operator.findByPk(req.params.id, {
        attributes: ['id', 'user', 'level'],
        order: [['id', 'ASC']],
      });
      return res.json(operator);
    } catch (e) {
      return res.status(400).json({ e });
    }
  }

  async update(req, res) {
    try {
      const operator = await Operator.findByPk(req.params.id);
      if (!operator) return res.status(400).json('usuário não encontrado');
      const newOperator = await operator.update(req.body);
      return res.status(200).json({ newOperator });
    } catch (e) {
      res.status(400).json({ e });
    }
  }

  async delete(req, res) {
    try {
      const operator = await Operator.findByPk(req.params.id);
      if (!operator) return res.status(400).json('usuário não encontrado');
      await operator.destroy();
      return res.status(200).json('Operador escluido com sucesso');
    } catch (e) {
      res.status(400).json({ e });
    }
  }
}

export default new OperatorController();
