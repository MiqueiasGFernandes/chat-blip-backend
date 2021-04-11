import { inject, injectable } from 'tsyringe';
import IConfigPort from '../infra/config/config.port';
import IRouterRegister from './router-register.interface';
import IServer from './server.insterface';

@injectable()
class AppStart {
  public readonly configPort: IConfigPort;

  public readonly serverPort: IServer;

  constructor(
      @inject('IConfigPort') configPort: IConfigPort,
      @inject('IServer') serverPort: IServer,
      @inject('IRouterRegister') routerRegister: IRouterRegister,
  ) {
    this.configPort = configPort;
    this.serverPort = serverPort;

    routerRegister.register();
  }
}

export default AppStart;
