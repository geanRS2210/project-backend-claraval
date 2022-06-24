import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Operator from '../models/Operator';
import Speciality from '../models/specialty';
import Patient from '../models/Patient';

const models = [Operator, Speciality, Patient];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
