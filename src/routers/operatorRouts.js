import { Router } from 'express';

import operatorController from '../controllers/OperatorController';

const routs = new Router();

routs.post('/', operatorController.store);
routs.get('/', operatorController.index);
routs.get('/:id', operatorController.show);
routs.put('/:id', operatorController.update);
routs.delete('/:id', operatorController.delete);
export default routs;
