import { Router } from 'express';
import Authorization from '../middleware/Testerlogin';

import operatorController from '../controllers/OperatorController';

const routs = new Router();

routs.post('/', Authorization, operatorController.store);
routs.get('/', Authorization, operatorController.index);
routs.get('/:id', Authorization, operatorController.show);
routs.put('/:id', Authorization, operatorController.update);
routs.delete('/:id', Authorization, operatorController.delete);
export default routs;
