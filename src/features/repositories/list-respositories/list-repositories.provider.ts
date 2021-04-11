import { container } from 'tsyringe';
import RepositoryController from './repository.controller.';

class ListRespositoriesProvider {
  static injectDependencies() {
    const getControllerChildContainer = container.createChildContainer();

    container
      .register<RepositoryController>(RepositoryController, { useClass: RepositoryController });

    getControllerChildContainer
      .register('IGetBaseControllerRepository', { useClass: RepositoryController });
  }
}

export default ListRespositoriesProvider;
