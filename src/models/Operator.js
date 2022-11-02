import Sequelize, { Model } from 'sequelize';

import bcryptjs from 'bcryptjs';

export default class Operator extends Model {
  static init(sequelize) {
    super.init({
      user: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'Médico já existe, favor cadastra outro nome de usuário!',
        },
        validate: {
          len: {
            args: [4, 250],
            msg: 'Usuario incorreto',
          },
        },
      },
      password: {
        type: Sequelize.VIRTUAL,
        defaultValue: '',
        validate: {
          len: {
            args: [4, 25],
            msg: 'Senha deve conter entre 4 e 25 caracteres.',
          },
        },
      },
      level: {
        type: Sequelize.STRING,
        defaultValue: 'operator',
      },
      password_hash: Sequelize.STRING,
    }, {
      sequelize,
      tabelName: 'operators',
    });
    this.addHook('beforeSave', async (operator) => {
      if (operator.id) return;
      // eslint-disable-next-line no-param-reassign
      operator.password_hash = await bcryptjs.hash(operator.password, 8);
    });
    this.passwordIsValid = (password, operator) => bcryptjs.compare(password, operator.password_hash);
    return this;
  }
}
