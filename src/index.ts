import * as express from 'express';

const server: express.Application = express();
const PORT = 3000;
const NODE_ENV = "development";

server.get('/', (req, res) => {
  res.send('It works');
});

server.listen(PORT, (error: boolean): void => {
  if (error) {
    console.error('ERROR - Unable to start server.');
  } else {
    console.info(
      `INFO - Server started on http://localhost:${PORT} [${NODE_ENV}]`
    );
  }
});

export default server;