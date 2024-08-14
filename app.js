import express from 'express';

import homePageRouter from './routes/index.js';

const app = express();
const PORT = process.env.PORT;

app.use('/', homePageRouter);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
