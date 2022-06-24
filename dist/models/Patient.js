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
      date_birth: {
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
      mom: {
        type: _sequelize2.default.INTEGER,
        defaultValue: '',
        validate: {
          notEmpty: 'campo nome da mãe não pode ficar em branco!!',
        },
      },
      cpf: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          notEmpty: 'campo cpf não pode ficar em branco!!',
        },
      },
      address: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
      },
      number: {
        type: _sequelize2.default.INTEGER,
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
      date_marked: {
        type: _sequelize2.default.INTEGER,
      },
      hour_marked: {
        type: _sequelize2.default.INTEGER,
      },
      status: {
        type: _sequelize2.default.STRING,
        defaultValue: 'awating',
      },
    }, {
      sequelize,
      tableName: 'patients',
    });
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Speciality, { foreignKey: 'specialty_id' });
  }
} exports.default = Patient;
