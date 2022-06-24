import jwt from 'jsonwebtoken';

import Operator from '../models/Operator';

class LoginController {
  async index(req, res) {
    try {
      const { user, password } = req.body;
      const operator = await Operator.findOne({
        where: { user },
      });
      console.log(operator);
      if (!operator) {
        return res.json({ errors: 'Usuario inválido' });
      }
      if (!(await Operator.passwordIsValid(password, operator))) {
        return res.json({ errors: 'Senha inválida' });
      }
      const { id, level } = operator;
      const token = jwt.sign({ id, user }, process.env.TOKEN_SECRET, {
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

export default new LoginController();
