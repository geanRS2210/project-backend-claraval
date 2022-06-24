"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
var _database = require('../config/database'); var _database2 = _interopRequireDefault(_database);
var _Operator = require('../models/Operator'); var _Operator2 = _interopRequireDefault(_Operator);
var _specialty = require('../models/specialty'); var _specialty2 = _interopRequireDefault(_specialty);
var _Patient = require('../models/Patient'); var _Patient2 = _interopRequireDefault(_Patient);

const models = [_Operator2.default, _specialty2.default, _Patient2.default];

const connection = new (0, _sequelize2.default)(_database2.default);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
