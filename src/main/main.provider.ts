import 'reflect-metadata';
import { container } from 'tsyringe';
import AppStart from './app-start.config';
import ExpressServerAdapter from './express-server.adapter';
import RoutesRegister from './routes-register.config';

class ListRespositoriesProvider {
  static injectDependencies() {
    container
      .registerSingleton('IServer', ExpressServerAdapter)
      .register('IRouterRegister', { useClass: RoutesRegister })
      .register<AppStart>('AppStart', { useClass: AppStart });
  }
}

export default ListRespositoriesProvider;
