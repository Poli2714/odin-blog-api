import { Router } from 'express';

const homePageRouter = new Router();

homePageRouter.get('/', (req, res) => {
  res.send('Hello world!');
});

export default homePageRouter;
