import { inject, injectable } from 'tsyringe';
import IServer from '../../../main/server.insterface';

@injectable()
class BaseController {
  protected server: IServer;

  public constructor(@inject('IServer') server: IServer) {
    this.server = server;
  }
}

export default BaseController;
