"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _dotenv = require('dotenv'); var _dotenv2 = _interopRequireDefault(_dotenv);

_dotenv2.default.config();

require('./database');

var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);
var _homeRouts = require('./routers/homeRouts'); var _homeRouts2 = _interopRequireDefault(_homeRouts);
var _operatorRouts = require('./routers/operatorRouts'); var _operatorRouts2 = _interopRequireDefault(_operatorRouts);
var _specialtyRouts = require('./routers/specialtyRouts'); var _specialtyRouts2 = _interopRequireDefault(_specialtyRouts);
var _loginRouts = require('./routers/loginRouts'); var _loginRouts2 = _interopRequireDefault(_loginRouts);
var _patientRouts = require('./routers/patientRouts'); var _patientRouts2 = _interopRequireDefault(_patientRouts);

const corsOptions = {
  origin: 'http://localhost:3000',
  methods: ['POST', 'GET', 'PUT', 'DELETE'],
  credentials: true,
  maxAge: 3600,
};

class App {
  constructor() {
    this.app = _express2.default.call(void 0, );
    this.middleware();
    this.routes();
  }

  middleware() {
    this.app.use(_express2.default.urlencoded({ extended: true }));
    this.app.use(_express2.default.json());
    this.app.use(_cors2.default.call(void 0, corsOptions));
  }

  routes() {
    this.app.use('/', _homeRouts2.default);
    this.app.use('/operator/', _operatorRouts2.default);
    this.app.use('/specialty/', _specialtyRouts2.default);
    this.app.use('/login/', _loginRouts2.default);
    this.app.use('/patient/', _patientRouts2.default);
  }
}

exports. default = new App().app;
