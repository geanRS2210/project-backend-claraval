import { Router } from 'express';

import specialtyController from '../controllers/patientController';
import Authorization from '../middleware/Testerlogin';

const routs = new Router();

routs.post('/', Authorization, specialtyController.store);
routs.get('/', Authorization, specialtyController.index);
routs.get('/:id', Authorization, specialtyController.show);
routs.put('/:id', Authorization, specialtyController.update);
routs.delete('/:id', Authorization, specialtyController.delete);

export default routs;
