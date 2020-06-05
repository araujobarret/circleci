import * as express from 'express';

const server: express.Application = express();
const PORT = 3000;
const NODE_ENV = "development";

server.get('/', ({}, res) => {
  res.send('It works');
});

const app = server.listen(PORT, (error: boolean): void => {
  if (error) {
    console.error('ERROR - Unable to start server.');
  } else {
    console.info(
      `INFO - Server started on http://localhost:${PORT} [${NODE_ENV}]`
    );
  }
});

export default app;