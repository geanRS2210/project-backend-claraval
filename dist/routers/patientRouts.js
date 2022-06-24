"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');

var _patientController = require('../controllers/patientController'); var _patientController2 = _interopRequireDefault(_patientController);

const routs = new (0, _express.Router)();

routs.post('/', _patientController2.default.store);
routs.get('/', _patientController2.default.index);
routs.get('/:id', _patientController2.default.show);
routs.put('/:id', _patientController2.default.update);
routs.delete('/:id', _patientController2.default.delete);

exports. default = routs;
