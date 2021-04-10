import cors from 'cors';
import express, { Express } from 'express';
import dotenv from 'dotenv';

class AppStart {
  private static expressInstance: Express;

  private static loadEnvinronmentVariables(): void {
    dotenv.config({
      path: `${__dirname}/../.env`,
    });
  }

  private static initializeExpressInstance(): void {
    AppStart.expressInstance = express();
  }

  private static disableHeaders(): void {
    AppStart.expressInstance.disabled('x-powered-by');
  }

  private static enableMiddlewares(): void {
    AppStart.expressInstance.use(cors());
    AppStart.expressInstance.use(express.json());
  }

  private static listenServer(): void {
    AppStart.expressInstance.listen(3000);
  }

  /**
   * @access public
   * @description This method is application entrypoit,
   * avoid change order of internal methods call
   * @returns void
   */
  public static main(): void {
    AppStart.loadEnvinronmentVariables();
    AppStart.initializeExpressInstance();
    AppStart.disableHeaders();
    AppStart.enableMiddlewares();
    AppStart.listenServer();
    // AppStart.initializeControllers();
  }
}

export default AppStart;
