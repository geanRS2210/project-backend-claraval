"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');

var _OperatorController = require('../controllers/OperatorController'); var _OperatorController2 = _interopRequireDefault(_OperatorController);

const routs = new (0, _express.Router)();

routs.post('/', _OperatorController2.default.store);
routs.get('/', _OperatorController2.default.index);
routs.get('/:id', _OperatorController2.default.show);
routs.put('/:id', _OperatorController2.default.update);
routs.delete('/:id', _OperatorController2.default.delete);
exports. default = routs;
