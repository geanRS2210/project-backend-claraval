import Specialty from '../models/specialty';
import Patient from '../models/Patient';

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
      const patients = await Specialty.findAll({
        attributes: ['id', 'doctor', 'address', 'telephone', 'notes'],
        order: [['id', 'ASC']],
        include: {
          model: Patient,
          attributes: ['name', 'date_birth', 'mom', 'cpf', 'date_marked'],
        },
      });
      return res.json(patients);
    } catch (e) {
      return res.status(400).json({ e });
    }
  }

  async show(req, res) {
    try {
      const patient = await Specialty.findByPk(req.params.id, {
        attributes: ['doctor', 'address', 'telephone', 'notes'],
        order: [['id', 'ASC']],
        include: {
          model: Patient,
          attributes: ['name', 'date_birth', 'mom', 'cpf', 'date_marked'],
        },
      });
      return res.json(patient);
    } catch (e) {
      return res.status(400).json({ e });
    }
  }

  async update(req, res) {
    try {
      const specialty = await Specialty.findByPk(req.params.id);
      if (!specialty) return res.status(400).json('Medico não encontrado');
      const newspecialty = await specialty.update(req.body);
      return res.json(newspecialty);
    } catch (e) {
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
