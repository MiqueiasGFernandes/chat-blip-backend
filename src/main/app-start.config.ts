import cors from 'cors';
import express from 'express';

class AppStart {
  static expressInstance = express();

  static disableHeaders() {
    AppStart.expressInstance.disabled('x-powered-by');
  }

  static enableMiddlewares() {
    AppStart.expressInstance.use(cors());
    AppStart.expressInstance.use(express.json());
  }

  static listenServer() {
    AppStart.expressInstance.listen(3000);
  }

  static main() {
    AppStart.disableHeaders();
    AppStart.enableMiddlewares();
    AppStart.listenServer();
    // AppStart.initializeControllers();
  }
}

export default AppStart;
