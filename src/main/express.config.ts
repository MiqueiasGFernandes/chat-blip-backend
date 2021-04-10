import cors from 'cors';
import express, { Express } from 'express';

class ExpressConfig {
  private static expressInstance: Express;

  private static disableHeaders(): void {
    ExpressConfig.expressInstance.disabled('x-powered-by');
  }

  private static enableMiddlewares(): void {
    ExpressConfig.expressInstance.use(cors());
    ExpressConfig.expressInstance.use(express.json());
  }

  private static listenServer(): void {
    ExpressConfig.expressInstance.listen(3000);
  }

  public static initializeExpressInstance(): Express {
    ExpressConfig.expressInstance = express();
    ExpressConfig.disableHeaders();
    ExpressConfig.enableMiddlewares();
    ExpressConfig.listenServer();
    return ExpressConfig.expressInstance;
  }
}

export default ExpressConfig;
