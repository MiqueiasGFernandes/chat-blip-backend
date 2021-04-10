import { container } from 'tsyringe';
import RepositoryController from './repository.controller.';

class ListRespositoriesProvider {
  static injectDependencies() {
    container
      .register<RepositoryController>(RepositoryController, { useClass: RepositoryController });
  }
}

export default ListRespositoriesProvider;
