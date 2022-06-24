import jwt from 'jsonwebtoken';
import Operator from '../models/Operator';

export default async function Authorization(req, res, next) {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.json(['Operador não logado']);
  }
  const token = authorization.split(' ');
  try {
    const dados = jwt.verify(token[1], process.env.TOKEN_SECRET);
    const { id, user} = dados;
    req.userId = id;
    req.userName = user;
    const userModify = await Operator.findOne({
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
}
