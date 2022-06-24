"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');

var _SpecialtyController = require('../controllers/SpecialtyController'); var _SpecialtyController2 = _interopRequireDefault(_SpecialtyController);

const routs = new (0, _express.Router)();

routs.post('/', _SpecialtyController2.default.store);
routs.get('/', _SpecialtyController2.default.index);
routs.get('/:id', _SpecialtyController2.default.show);
routs.put('/:id', _SpecialtyController2.default.update);
routs.delete('/:id', _SpecialtyController2.default.delete);

exports. default = routs;
