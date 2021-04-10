import { container } from 'tsyringe';
import AppStart from './app-start.config';

class ListRespositoriesProvider {
  static injectDependencies() {
    container
      .register<AppStart>('AppStart', { useClass: AppStart });
  }
}

export default ListRespositoriesProvider;
