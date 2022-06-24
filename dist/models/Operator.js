"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

var _bcryptjs = require('bcryptjs'); var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

 class Operator extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      user: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        unique: {
          msg: 'Médico já existe, favor cadastra outro médico!',
        },
        validate: {
          len: {
            args: [4, 250],
            msg: 'Usuario incorreto',
          },
        },
      },
      password: {
        type: _sequelize2.default.VIRTUAL,
        defaultValue: '',
        validate: {
          len: {
            args: [4, 25],
            msg: 'Senha deve conter entre 4 e 25 caracteres.',
          },
        },
      },
      level: {
        type: _sequelize2.default.STRING,
        defaultValue: 'operator',
      },
      password_hash: _sequelize2.default.STRING,
    }, {
      sequelize,
      tabelName: 'operators',
    });
    this.addHook('beforeSave', async (operator) => {
      if (operator.id) return;
      // eslint-disable-next-line no-param-reassign
      operator.password_hash = await _bcryptjs2.default.hash(operator.password, 8);
    });
    this.passwordIsValid = (password, operator) => _bcryptjs2.default.compare(password, operator.password_hash);
    return this;
  }
} exports.default = Operator;
