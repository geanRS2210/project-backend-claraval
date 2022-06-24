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
      date_birth: {
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
      mom: {
        type: Sequelize.INTEGER,
        defaultValue: '',
        validate: {
          notEmpty: 'campo nome da mãe não pode ficar em branco!!',
        },
      },
      cpf: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: 'campo cpf não pode ficar em branco!!',
        },
      },
      address: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      number: {
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
      date_marked: {
        type: Sequelize.INTEGER,
      },
      hour_marked: {
        type: Sequelize.INTEGER,
      },
      status: {
        type: Sequelize.STRING,
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
}
