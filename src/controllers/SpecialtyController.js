import Specialty from '../models/specialty';

class OperatorController {
  async store(req, res) {
    try {
      const newspeciality = await Specialty.create(req.body);
      return res.json(newspeciality);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.validatorArgs),
      });
    }
  }

  async index(req, res) {
    try {
      const specialties = await Specialty.findAll();
      return res.json(specialties);
    } catch (e) {
      console.log(e);
      return res.status(400).json({ e });
    }
  }

  async show(req, res) {
    try {
      const specialty = await Specialty.findByPk(req.params.id);
      return res.json(specialty);
    } catch (e) {
      return res.status(400).json({ e });
    }
  }

  async update(req, res) {
    try {
      console.log(req.params.id);
      const specialty = await Specialty.findByPk(req.params.id);
      if (!specialty) return res.status(400).json('Medico não encontrado');
      const newspecialty = await specialty.update(req.body);
      return res.json(newspecialty);
    } catch (e) {
      console.log(e);
      return res.status(400).json({ e });
    }
  }

  async delete(req, res) {
    try {
      const specialty = await Specialty.findByPk(req.params.id);
      if (!specialty) return res.status(400).json('Medico não encontrado');
      await specialty.destroy();
      return res.status(200).json('Medico excuido com sucesso');
    } catch (e) {
      return res.status(400).json({ e });
    }
  }
}

export default new OperatorController();
