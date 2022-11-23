"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');

var _SpecialtyController = require('../controllers/SpecialtyController'); var _SpecialtyController2 = _interopRequireDefault(_SpecialtyController);
var _Testerlogin = require('../middleware/Testerlogin'); var _Testerlogin2 = _interopRequireDefault(_Testerlogin);

const routs = new (0, _express.Router)();

routs.post('/', _Testerlogin2.default, _SpecialtyController2.default.store);
routs.get('/', _Testerlogin2.default, _SpecialtyController2.default.index);
routs.get('/:id', _Testerlogin2.default, _SpecialtyController2.default.show);
routs.put('/:id', _Testerlogin2.default, _SpecialtyController2.default.update);
routs.delete('/:id', _Testerlogin2.default, _SpecialtyController2.default.delete);

exports. default = routs;
