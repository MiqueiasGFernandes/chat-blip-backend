import { container } from 'tsyringe';
import FilterByLanguageRepository from './filter-by-language/filter-by-language.service';
import GetFiveFirstRepositoriesService from './get-five-first-repositories/get-five-first-repositories.service';
import GetOrganizationAvatarService from './get-organization-avatar/get-organization-avatar.service';
import ListRepositoryService from './list-respositories/list-repository.service';
import RepositoryController from './repository.controller';
import RepositoryService from './repository.service';
import ToLimeCollectionService from './to-lime-collection/to-lime-collection.service';

class ListRespositoriesProvider {
  static injectDependencies() {
    container
      .register('ToLimeCollectionUseCase', { useClass: ToLimeCollectionService })
      .register('GetOrganizationAvatarUseCase', { useClass: GetOrganizationAvatarService })
      .register<RepositoryController>('RepositoryController', { useClass: RepositoryController })
      .register('FilterByLanguageUseCase', { useClass: FilterByLanguageRepository })
      .register('ListRepositoryUseCase', { useClass: ListRepositoryService })
      .register('GetFiveFirstRepositories', { useClass: GetFiveFirstRepositoriesService })
      .register<RepositoryService>('RepositoryService', { useClass: RepositoryService });
  }
}

export default ListRespositoriesProvider;
