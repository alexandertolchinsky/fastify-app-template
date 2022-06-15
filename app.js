import fastifyObjectionjs from 'fastify-objectionjs';
import addRoutes from './routes/index.js';
import User from './models/User.js';

// eslint-disable-next-line no-unused-vars
export default async (app, options) => {
  app.register(fastifyObjectionjs, {
    models: [User],
  });
  addRoutes(app);
  return app;
};
