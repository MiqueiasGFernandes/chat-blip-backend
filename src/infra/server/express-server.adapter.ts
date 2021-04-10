import express, { Express } from 'express';
import { Server } from 'http';
import { inject, singleton } from 'tsyringe';
import IGetBaseController from '../../features/_common/controller/get-base.controller.interface';
import IConfigPort from '../config/config.port';
import IServerPort from './server.port';

@singleton()
class ExpressServerAdapter implements IServerPort {
  private readonly server: Server

  private readonly express: Express;

  constructor(@inject('IConfigPort') configPort: IConfigPort) {
    this.express = express();
    this.server = this.express.listen(configPort.getNumber('PORT'), () => {
      console.log('Express server started');
    });
  }

  public closeConnection(): void {
    this.server.close();
  }

  public async get(path: string, controller: IGetBaseController): Promise<void> {
    this.express.get(path, controller.get);
  }
}

export default ExpressServerAdapter;
