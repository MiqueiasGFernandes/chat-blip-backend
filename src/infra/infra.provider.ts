import { container } from 'tsyringe';
import EnvConfigAdapter from './config/env.config.adapter';
import ExpressServerAdapter from './server/express-server.adapter';

class ListRespositoriesProvider {
  static injectDependencies() {
    container
      .register('IConfigPort', { useClass: EnvConfigAdapter })
      .register('IServerPort', { useClass: ExpressServerAdapter });
  }
}

export default ListRespositoriesProvider;
