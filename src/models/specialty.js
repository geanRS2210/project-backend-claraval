import Sequelize, { Model } from 'sequelize';

export default class Speciality extends Model {
  static init(sequelize) {
    super.init({
      doctor: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'Médico já existe, favor cadastra outro médico!',
        },
        validate: {
          notEmpty: 'campo nome do médico não pode ficar em branco!!',
          len: {
            args: [4, 250],
            msg: 'Nome incorreto',
          },
        },
      },
      address: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: 'campo endereço não pode ficar em branco!!',
          len: {
            args: [4, 100],
            msg: 'Endereço deve conter entre 4 e 100 caracteres.',
          },
        },
      },
      number: {
        type: Sequelize.STRING,
        defaultValue: 'SN',
      },
      telephone: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: 'campo telefone não pode ficar em branco!!',
        },
      },
      whatsapp: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: 'campo telefone não pode ficar em branco!!',
        },
      },
      localPay: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      comments: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      specialty: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: 'campo especialidade não pode ficar em branco!!',
        },
      },
    }, {
      sequelize,
      tableName: 'specialty',
    });
    return this;
  }
}
