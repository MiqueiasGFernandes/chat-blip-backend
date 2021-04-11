import { inject, injectable } from 'tsyringe';
import RepositoryModel from '../_common/models/repository.model';
import IFilterByLanguage from './filter-by-language/filter-by-language.use-case';
import IListRepositoryUseCase from './list-respositories/list-repository.use-case';

@injectable()
class RepositoryService {
  private readonly filterByLanguageUseCase: IFilterByLanguage;

  private readonly listRepositores: IListRepositoryUseCase;

  constructor(
    @inject('FilterByLanguageUseCase') filterByLanguageUseCase: IFilterByLanguage,
    @inject('ListRepositoryUseCase') listRepositories: IListRepositoryUseCase,
  ) {
    this.filterByLanguageUseCase = filterByLanguageUseCase;
    this.listRepositores = listRepositories;
  }

  public async list(): Promise<RepositoryModel[]> {
    const repositoriesList = await this.listRepositores.listByCreatedAscOrder();
    const filteredRepositoriesByLanguage = await this.filterByLanguageUseCase
      .filter(repositoriesList, 'C#');
    return filteredRepositoriesByLanguage;
  }
}

export default RepositoryService;
