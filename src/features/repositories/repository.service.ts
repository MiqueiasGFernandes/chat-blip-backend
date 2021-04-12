import { inject, injectable } from 'tsyringe';
import IFilterByLanguage from './filter-by-language/filter-by-language.use-case';
import IGetFiveFirstRepositories from './get-five-first-repositories/get-five-first-repositories.use-case';
import IGetOrganizationAvatarUseCase from './get-organization-avatar/get-organization-avatar.use-case';
import IListRepositoryUseCase from './list-respositories/list-repository.use-case';
import List from './list.type';

@injectable()
class RepositoryService {
  private readonly filterByLanguageUseCase: IFilterByLanguage;

  private readonly listRepositores: IListRepositoryUseCase;

  private readonly getFiveFirstRepositories: IGetFiveFirstRepositories;

  private readonly getOrganizationAvatar: IGetOrganizationAvatarUseCase;

  constructor(
    @inject('FilterByLanguageUseCase') filterByLanguageUseCase: IFilterByLanguage,
    @inject('ListRepositoryUseCase') listRepositories: IListRepositoryUseCase,
    @inject('GetFiveFirstRepositories') getFiveFirstRepositories: IGetFiveFirstRepositories,
    @inject('GetOrganizationAvatarUseCase') getOrganizationAvatar: IGetOrganizationAvatarUseCase,
  ) {
    this.filterByLanguageUseCase = filterByLanguageUseCase;
    this.listRepositores = listRepositories;
    this.getFiveFirstRepositories = getFiveFirstRepositories;
    this.getOrganizationAvatar = getOrganizationAvatar;
  }

  public async list(): Promise<List> {
    const avatar = await this.getOrganizationAvatar.getAvatar();
    const repositoriesList = await this.listRepositores.listByCreatedAscOrder();
    const filteredRepositoriesByLanguage = this.filterByLanguageUseCase
      .filter(repositoriesList, 'C#');
    const fiveFirstRepositories = this
      .getFiveFirstRepositories.getFiveFirst(filteredRepositoriesByLanguage);
    return { fiveFirstRepositories, avatar };
  }
}

export default RepositoryService;
