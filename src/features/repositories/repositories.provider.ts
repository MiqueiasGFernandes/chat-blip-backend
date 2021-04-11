import 'reflect-metadata';
import { container, delay } from 'tsyringe';
import FilterByLanguageRepository from './filter-by-language/filter-by-language.service';
import ListRepositoryService from './list-respositories/list-repository.service';
import RepositoryController from './repository.controller';

class ListRespositoriesProvider {
  static injectDependencies() {
    container
      .register('FilterByLanguageUseCase', { useClass: FilterByLanguageRepository })
      .register('ListRepositoryUseCase', { useClass: ListRepositoryService })
      .register<RepositoryController>('RepositoryController', { useClass: delay(() => RepositoryController) });
  }
}

export default ListRespositoriesProvider;
