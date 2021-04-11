import { Response } from 'express';
import { injectable } from 'tsyringe';
import BaseController from '../_common/controller/base.controller';
import IGetBaseRepository from '../_common/controller/get-base.controller.interface';

@injectable()
class RepositoryController extends BaseController implements IGetBaseRepository {
  public async get(): Promise<Response> {
    return this.server.response.send({ message: 'Hello World' });
  }
}

export default RepositoryController;
