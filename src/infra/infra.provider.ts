import { container } from 'tsyringe';
import EnvConfigAdapter from './config/env.config.adapter';

class ListRespositoriesProvider {
  static injectDependencies() {
    container
      .register('IConfigPort', { useClass: EnvConfigAdapter });
  }
}

export default ListRespositoriesProvider;
