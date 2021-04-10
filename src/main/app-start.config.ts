const cors = require('cors');
const express = require('express');

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
    AppStart.expressInstance.listen(() => {
      console.log('App started...');
    }, 3000);
  }

  static main() {
    AppStart.disableHeaders();
    AppStart.enableMiddlewares();
    AppStart.listenServer();
    // AppStart.initializeControllers();
  }
}

module.exports = AppStart;
