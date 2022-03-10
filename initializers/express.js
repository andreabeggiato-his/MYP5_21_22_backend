import express from 'express';
import cors from 'cors';
import passport from 'passport';

import userEndpoints from '../app/endpoints/users/index.js';

const init = async () => {
  const app = express();
  
  app.use(cors());
  app.use(express.json());

  app.use(passport.initialize());
  
  userEndpoints(app);

  return app;
};

export default init;