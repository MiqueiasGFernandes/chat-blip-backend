import { inject, injectable } from 'tsyringe';
import IRouterRegister from './router-register.interface';
import IServer from './server.insterface';

@injectable()
class RoutesRegister implements IRouterRegister {
  private readonly router: IServer;

  constructor(@inject('IServer') server: IServer) {
    this.router = server;
  }

  public register(): void {
    this.router.get('/repositories', 'RepositoryController');
    this.router.get('/avatar', 'AvatarController');
  }
}

export default RoutesRegister;
