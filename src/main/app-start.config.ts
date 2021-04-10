import { inject, injectable } from 'tsyringe';
import IConfigPort from '../infra/config/config.port';

@injectable()
class AppStart {
  private readonly configPort: IConfigPort;

  constructor(@inject('IConfigPort') configPort: IConfigPort) {
    this.configPort = configPort;
  }
}

export default AppStart;
