"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _Operator = require('../models/Operator'); var _Operator2 = _interopRequireDefault(_Operator);

class LoginController {
  async index(req, res) {
    try {
      const { user, password } = req.body;
      const operator = await _Operator2.default.findOne({
        where: { user },
      });
      console.log(operator);
      if (!operator) {
        return res.json({ errors: 'Usuario inválido' });
      }
      if (!(await _Operator2.default.passwordIsValid(password, operator))) {
        return res.json({ errors: 'Senha inválida' });
      }
      const { id, level } = operator;
      const token = _jsonwebtoken2.default.sign({ id, user }, process.env.TOKEN_SECRET, {
        expiresIn: process.env.TOKEN_EXPIRATION,
      });
      if (token) {
        console.log(token);
        return res.json({
          token,
          user,
          level,
          id,
        });
      }
    } catch (e) {
      return res.status(400).json({ e });
    }
  }
}

exports. default = new LoginController();
