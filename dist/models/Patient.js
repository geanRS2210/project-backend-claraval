"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class Patient extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      name: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          notEmpty: 'Campo nome não pode ficar em branco!!',
          len: {
            arg: [4, 200],
            msg: 'Nome deve conter entre 4 e 200 caracteres',
          },
        },
      },
      birthDate: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          notEmpty: 'campo data de nascimento não pode ficar em branco!!',
          len: {
            arg: [1, 10],
            msg: 'Data de nascimento incorreta!',
          },
        },
      },
      nameMom: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
      },
      cpf: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
      },
      address: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
      },
      state: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
      },
      telephone: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        notEmpty: 'campo telephone não pode ficar em branco!!',
        len: {
          arg: [1, 14],
          msg: 'telephone incorreto!',
        },
      },
      appointmeintDate: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
      },
      hour: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
      },
      doctor: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
      },
      value: {
        type: _sequelize2.default.STRING,
        defaultValue: '200,00',
      },
      rg: {
        type: _sequelize2.default.STRING,
        defaultValue: 'Não informado',
      },
    }, {
      sequelize,
      tableName: 'patients',
    });
    return this;
  }
} exports.default = Patient;
