import 'reflect-metadata';
import { container } from 'tsyringe';
import EnvConfigAdapter from './config/env.config.adapter';
import NodeFetchAdapter from './github-api/node-fetch.adapter';

class ListRespositoriesProvider {
  static injectDependencies() {
    container
      .register('IConfigPort', { useClass: EnvConfigAdapter })
      .register('IGithubApiPort', { useClass: NodeFetchAdapter });
  }
}

export default ListRespositoriesProvider;
