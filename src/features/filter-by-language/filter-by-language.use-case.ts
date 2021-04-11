import RepositoryModel from '../_common/models/repository.model';

interface FilterByLanguage {
  filter(repositoriesList: RepositoryModel[], language: string): RepositoryModel[]
}

export default FilterByLanguage;
