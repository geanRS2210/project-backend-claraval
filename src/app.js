import dotenv from 'dotenv';

dotenv.config();

import './database';

import express from 'express';
import cors from 'cors';
import homeRoutes from './routers/homeRouts';
import operatorRoutes from './routers/operatorRouts';
import specialtyRoutes from './routers/specialtyRouts';
import loginRouts from './routers/loginRouts';
import patientRouts from './routers/patientRouts';

const corsOptions = {
  origin: 'http://localhost:3000',
  methods: ['POST', 'GET', 'PUT', 'DELETE'],
  credentials: true,
  maxAge: 3600,
};

class App {
  constructor() {
    this.app = express();
    this.middleware();
    this.routes();
  }

  middleware() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(cors(corsOptions));
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/operator/', operatorRoutes);
    this.app.use('/specialty/', specialtyRoutes);
    this.app.use('/login/', loginRouts);
    this.app.use('/patient/', patientRouts);
  }
}

export default new App().app;
