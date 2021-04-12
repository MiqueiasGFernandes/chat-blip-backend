import { inject, injectable } from 'tsyringe';
import RepositoryModel from '../_common/models/repository.model';
import IFilterByLanguage from './filter-by-language/filter-by-language.use-case';
import IGetFiveFirstRepositories from './get-five-first-repositories/get-five-first-repositories.use-case';
import IListRepositoryUseCase from './list-respositories/list-repository.use-case';

@injectable()
class RepositoryService {
  private readonly filterByLanguageUseCase: IFilterByLanguage;

  private readonly listRepositores: IListRepositoryUseCase;

  private readonly getFiveFirstRepositories: IGetFiveFirstRepositories;

  constructor(
    @inject('FilterByLanguageUseCase') filterByLanguageUseCase: IFilterByLanguage,
    @inject('ListRepositoryUseCase') listRepositories: IListRepositoryUseCase,
    @inject('GetFiveFirstRepositories') getFiveFirstRepositories: IGetFiveFirstRepositories,
  ) {
    this.filterByLanguageUseCase = filterByLanguageUseCase;
    this.listRepositores = listRepositories;
    this.getFiveFirstRepositories = getFiveFirstRepositories;
  }

  public async list(): Promise<RepositoryModel[]> {
    const repositoriesList = await this.listRepositores.listByCreatedAscOrder();
    const filteredRepositoriesByLanguage = this.filterByLanguageUseCase
      .filter(repositoriesList, 'C#');
    const fiveFirstRepositories = this
      .getFiveFirstRepositories.getFiveFirst(filteredRepositoriesByLanguage);
    return fiveFirstRepositories;
  }
}

export default RepositoryService;
