import { Router } from 'express';

import specialtyController from '../controllers/patientController';

const routs = new Router();

routs.post('/', specialtyController.store);
routs.get('/', specialtyController.index);
routs.get('/:id', specialtyController.show);
routs.put('/:id', specialtyController.update);
routs.delete('/:id', specialtyController.delete);

export default routs;
