import { container } from 'tsyringe';
import FilterByLanguageRepository from './filter-by-language/filter-by-language.service';
import ListRepositoryService from './list-respositories/list-repository.service';
import RepositoryController from './repository.controller';
import RepositoryService from './repository.service';

class ListRespositoriesProvider {
  static injectDependencies() {
    container
      .register<RepositoryController>('RepositoryController', { useClass: RepositoryController })
      .register('FilterByLanguageUseCase', { useClass: FilterByLanguageRepository })
      .register('ListRepositoryUseCase', { useClass: ListRepositoryService })
      .register<RepositoryService>('RepositoryService', { useClass: RepositoryService });
  }
}

export default ListRespositoriesProvider;
