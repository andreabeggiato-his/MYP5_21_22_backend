import createMiddleware from './create.js';

const registerMiddlewares = (app) => {
  app.post('/users', createMiddleware);
};

export default registerMiddlewares;