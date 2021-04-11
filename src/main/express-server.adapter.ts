import express, { Express, Request, Response } from 'express';
import { Server } from 'http';
import { container, inject, singleton } from 'tsyringe';
import IGetBaseController from '../features/_common/controller/get-base.controller.interface';
import IConfigPort from '../infra/config/config.port';
import IServer from './server.insterface';

@singleton()
class ExpressServerAdapter implements IServer {
  private readonly server: Server

  private readonly express: Express;

  public request: Request;

  public response: Response;

  constructor(@inject('IConfigPort') configPort: IConfigPort) {
    this.express = express();
    this.response = this.express.response;
    this.request = this.express.request;
    this.server = this.express.listen(configPort.getNumber('PORT'), () => {
      console.log('Express server started');
    });
  }

  public closeConnection(): void {
    console.log('Stopping...');
    this.server.close();
    process.exit(1);
  }

  public async get(path: string, controller: string): Promise<void> {
    const controllerInstace = container.resolve<IGetBaseController>(controller);
    this.express.get(path, controllerInstace.get);
  }
}

export default ExpressServerAdapter;
