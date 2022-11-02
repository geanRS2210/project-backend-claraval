"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class Speciality extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      doctor: {
        type: _sequelize2.default.STRING,
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
        type: _sequelize2.default.STRING,
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
        type: _sequelize2.default.STRING,
        defaultValue: 'SN',
      },
      telephone: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          notEmpty: 'campo telefone não pode ficar em branco!!',
        },
      },
      whatsapp: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          notEmpty: 'campo telefone não pode ficar em branco!!',
        },
      },
      localPay: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
      },
      comments: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
      },
      specialty: {
        type: _sequelize2.default.STRING,
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
} exports.default = Speciality;
