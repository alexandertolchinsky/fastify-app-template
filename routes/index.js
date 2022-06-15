export default (app) => {
  app.get('/', async (request, reply) => {
    const user = await app.objection.models.user.query().findById(1);
    reply.send(user);
  });
};
