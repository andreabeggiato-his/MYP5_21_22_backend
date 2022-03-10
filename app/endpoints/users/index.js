import passport from 'passport';
import createMiddleware from './create.js';
import meMiddleware from './me.js';

const registerMiddlewares = (app) => {
  app.get(
    '/users/me',
    passport.authenticate('basic', { session: false }),
    meMiddleware,
  );
  app.post('/users', createMiddleware);
};

export default registerMiddlewares;