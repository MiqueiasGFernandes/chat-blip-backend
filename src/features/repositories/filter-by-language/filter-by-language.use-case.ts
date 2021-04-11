import RepositoryModel from '../../_common/models/repository.model';

interface IFilterByLanguage {
  filter(repositoriesList: RepositoryModel[], language: string): RepositoryModel[]
}

export default IFilterByLanguage;
