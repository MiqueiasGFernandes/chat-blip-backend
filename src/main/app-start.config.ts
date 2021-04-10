import { inject, injectable } from 'tsyringe';
import IConfigPort from '../infra/config/config.port';
import IServerPort from '../infra/server/server.port';

@injectable()
class AppStart {
  private readonly configPort: IConfigPort;

  private readonly serverPort: IServerPort;

  constructor(
      @inject('IConfigPort') configPort: IConfigPort,
      @inject('IServerPort') serverPort: IServerPort,
  ) {
    this.configPort = configPort;
    this.serverPort = serverPort;
  }
}

export default AppStart;
