import express from 'express';
import cors from 'cors';

const port = 4000;

const init = async () => {
  const app = express();
  
  app.use(cors());
  app.use(express.json());

  return app;
};

export default init;