import Patient from '../models/Patient';
import Speciality from '../models/specialty';

class PatientController {
  async store(req, res) {
    try {
      const newPatient = await Patient.create(req.body);
      return res.json(newPatient);
    } catch (e) {
      console.log(e);
      return res.status(400).json({ e });
    }
  }

  async index(req, res) {
    try {
      const patients = await Patient.findAll({
        attributes: ['id', 'name', 'date_birth', 'mom', 'cpf', 'telephone'],
        order: [['id', 'ASC']],
        include: {
          model: Speciality,
          attributes: ['doctor', 'address', 'telephone', 'notes'],
        },
      });
      return res.json(patients);
    } catch (e) {
      return res.status(400).json({ e });
    }
  }

  async show(req, res) {
    try {
      const patient = await Patient.findByPk(req.params.id, {
        attributes: ['id', 'name', 'date_birth', 'mom', 'cpf', 'telephone'],
        order: [['id', 'ASC']],
        include: {
          model: Speciality,
          attributes: ['doctor', 'address', 'telephone', 'notes'],
        },
      });
      return res.json(patient);
    } catch (e) {
      return res.status(400).json({ e });
    }
  }

  async update(req, res) {
    try {
      const patient = await Patient.findByPk(req.params.id);
      if (!patient) return res.status(400).json('Paciente não encontrado');
      const newPatient = await patient.update(req.body);
      return res.json(newPatient);
    } catch (e) {
      return res.status(400).json({ e });
    }
  }

  async delete(req, res) {
    try {
      const patient = await Patient.findByPk(req.params.id);
      if (!patient) return res.status(400).json('Paciente não encontrado');
      await patient.destroy();
      return res.status(200).json('Paciente excuido com sucesso');
    } catch (e) {
      return res.status(400).json({ e });
    }
  }
}

export default new PatientController();
