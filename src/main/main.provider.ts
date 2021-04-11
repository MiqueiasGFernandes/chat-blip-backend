import 'reflect-metadata';
import { container, delay } from 'tsyringe';
import AppStart from './app-start.config';
import ExpressServerAdapter from './express-server.config';
import RoutesRegister from './routes-register.config';

class ListRespositoriesProvider {
  static injectDependencies() {
    container
      .registerSingleton('IServer', delay(() => ExpressServerAdapter))
      .register('IRouterRegister', { useClass: RoutesRegister })
      .register<AppStart>('AppStart', { useClass: AppStart });
  }
}

export default ListRespositoriesProvider;
