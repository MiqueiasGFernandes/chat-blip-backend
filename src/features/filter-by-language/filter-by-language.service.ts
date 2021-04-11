import RepositoryModel from '../_common/models/repository.model';
import IFilterByLanguage from './filter-by-language.use-case';
import NotFoundError from './not-found.error';

class FilterByLanguageRepository implements IFilterByLanguage {
  filter(repositoriesList: RepositoryModel[], language: string): RepositoryModel[] {
    const filteredRepositories = repositoriesList
      .filter((repository) => repository.language === language);
    if (filteredRepositories.length === 0) throw new NotFoundError(language);
    return filteredRepositories;
  }
}

export default FilterByLanguageRepository;
