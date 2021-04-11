import { injectable } from 'tsyringe';
import BaseController from '../_common/controller/base.controller';
import IGetBaseRepository from '../_common/controller/get-base.controller.interface';
import Response from '../_common/controller/response.type';

@injectable()
class RepositoryController extends BaseController implements IGetBaseRepository {
  get(): Promise<Response> {
    throw new Error('Method not implemented.');
  }
}

export default RepositoryController;
