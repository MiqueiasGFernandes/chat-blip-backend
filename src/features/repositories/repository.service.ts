import { inject, injectable } from 'tsyringe';
import IFilterByLanguage from './filter-by-language/filter-by-language.use-case';
import IGetFiveFirstRepositories from './get-five-first-repositories/get-five-first-repositories.use-case';
import IGetOrganizationAvatarUseCase from './get-organization-avatar/get-organization-avatar.use-case';
import IListRepositoryUseCase from './list-respositories/list-repository.use-case';
import IToLimeCollectionUseCase from './to-lime-collection/to-lime-collection.use-case';

@injectable()
class RepositoryService {
  private readonly filterByLanguageUseCase: IFilterByLanguage;

  private readonly listRepositores: IListRepositoryUseCase;

  private readonly getFiveFirstRepositories: IGetFiveFirstRepositories;

  private readonly getOrganizationAvatar: IGetOrganizationAvatarUseCase;

  private readonly toLimeCollection: IToLimeCollectionUseCase;

  constructor(
    @inject('FilterByLanguageUseCase') filterByLanguageUseCase: IFilterByLanguage,
    @inject('ListRepositoryUseCase') listRepositories: IListRepositoryUseCase,
    @inject('GetFiveFirstRepositories') getFiveFirstRepositories: IGetFiveFirstRepositories,
    @inject('GetOrganizationAvatarUseCase') getOrganizationAvatar: IGetOrganizationAvatarUseCase,
    @inject('ToLimeCollectionUseCase') toLimeCollection: IToLimeCollectionUseCase,
  ) {
    this.filterByLanguageUseCase = filterByLanguageUseCase;
    this.listRepositores = listRepositories;
    this.getFiveFirstRepositories = getFiveFirstRepositories;
    this.getOrganizationAvatar = getOrganizationAvatar;
    this.toLimeCollection = toLimeCollection;
  }

  public async list(): Promise<Record<string, unknown>> {
    const avatar = await this.getOrganizationAvatar.getAvatar();
    const repositoriesList = await this.listRepositores.listByCreatedAscOrder();
    const filteredRepositoriesByLanguage = this.filterByLanguageUseCase
      .filter(repositoriesList, 'C#');
    const fiveFirstRepositories = this
      .getFiveFirstRepositories.getFiveFirst(filteredRepositoriesByLanguage);
    const repositoriesResult = await this
      .toLimeCollection
      .toLime({ avatar, fiveFirstRepositories });
    return repositoriesResult;
  }
}

export default RepositoryService;
