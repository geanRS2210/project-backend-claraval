import Sequelize, { Model } from 'sequelize';

export default class Patient extends Model {
  static init(sequelize) {
    super.init({
      name: {
        type: Sequelize.STRING,
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
        type: Sequelize.STRING,
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
        type: Sequelize.INTEGER,
        defaultValue: '',
      },
      cpf: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      address: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      state: {
        type: Sequelize.INTEGER,
        defaultValue: '',
      },
      telephone: {
        type: Sequelize.STRING,
        defaultValue: '',
        notEmpty: 'campo telephone não pode ficar em branco!!',
        len: {
          arg: [1, 14],
          msg: 'telephone incorreto!',
        },
      },
      appointmeintDate: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      doctor: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      value: {
        type: Sequelize.STRING,
        defaultValue: '200,00',
      },
      rg: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
    }, {
      sequelize,
      tableName: 'patients',
    });
    return this;
  }
}
