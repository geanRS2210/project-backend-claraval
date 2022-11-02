"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _specialty = require('../models/specialty'); var _specialty2 = _interopRequireDefault(_specialty);

class OperatorController {
  async store(req, res) {
    try {
      const newspeciality = await _specialty2.default.create(req.body);
      return res.json(newspeciality);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.validatorArgs),
      });
    }
  }

  async index(req, res) {
    try {
      const specialties = await _specialty2.default.findAll({
        attributes: ['id', 'doctor', 'address', 'telephone', 'comments'],
        order: [['id', 'ASC']],
      });
      return res.json(specialties);
    } catch (e) {
      return res.status(400).json({ e });
    }
  }

  async show(req, res) {
    try {
      const specialty = await _specialty2.default.findByPk(req.params.id, {
        attributes: ['doctor', 'address', 'telephone', 'comments'],
        order: [['id', 'ASC']],
      });
      return res.json(specialty);
    } catch (e) {
      return res.status(400).json({ e });
    }
  }

  async update(req, res) {
    try {
      const specialty = await _specialty2.default.findByPk(req.params.id);
      if (!specialty) return res.status(400).json('Medico não encontrado');
      const newspecialty = await specialty.update(req.body);
      return res.json(newspecialty);
    } catch (e) {
      return res.status(400).json({ e });
    }
  }

  async delete(req, res) {
    try {
      const specialty = await _specialty2.default.findByPk(req.params.id);
      if (!specialty) return res.status(400).json('Medico não encontrado');
      await specialty.destroy();
      return res.status(200).json('Medico excuido com sucesso');
    } catch (e) {
      return res.status(400).json({ e });
    }
  }
}

exports. default = new OperatorController();
