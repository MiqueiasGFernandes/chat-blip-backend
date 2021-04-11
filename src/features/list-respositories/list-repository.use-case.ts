import RepositoryModel from './repository.model';

interface IListRepositoryUseCase {
  list(): Promise<RepositoryModel[]>
}

export default IListRepositoryUseCase;
