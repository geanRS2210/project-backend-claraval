"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
var _Operator = require('../models/Operator'); var _Operator2 = _interopRequireDefault(_Operator);

 async function Authorization(req, res, next) {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.json(['Operador não logado']);
  }
  const token = authorization.split(' ');
  try {
    const dados = _jsonwebtoken2.default.verify(token[1], process.env.TOKEN_SECRET);
    const { id, user } = dados;
    req.userId = id;
    req.userName = user;
    const userModify = await _Operator2.default.findOne({
      where: {
        id,
        user,
      },
    });
    if (!userModify) {
      return res.json(['Usuario modificado']);
    }
  } catch (e) {
    return res.json([e]);
  }
  next();
} exports.default = Authorization;
