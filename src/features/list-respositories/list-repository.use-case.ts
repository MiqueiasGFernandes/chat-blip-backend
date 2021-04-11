import RepositoryModel from '../_common/models/repository.model';

interface IListRepositoryUseCase {
  list(): Promise<RepositoryModel[]>
}

export default IListRepositoryUseCase;
