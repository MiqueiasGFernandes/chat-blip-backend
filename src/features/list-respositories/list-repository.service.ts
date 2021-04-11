import { inject, injectable } from 'tsyringe';
import IConfigPort from '../../infra/config/config.port';
import IGithubApiPort from '../../infra/github-api/github-api.port';
import IListRepositoryUseCase from './list-repository.use-case';
import RepositoryModel from './repository.model';

@injectable()
class ListRepositoryService implements IListRepositoryUseCase {
  private readonly githubApiPort: IGithubApiPort;

  private readonly configPort: IConfigPort;

  constructor(
    @inject('IGithubApiPort') githubApiPort: IGithubApiPort,
    @inject('IConfigPort') configPort: IConfigPort,
  ) {
    this.githubApiPort = githubApiPort;
    this.configPort = configPort;
  }

  public async list(): Promise<RepositoryModel[]> {
    const apiUrl = this.configPort.getString('GITHUB_API_PORT');
    const result = await this.githubApiPort.get(apiUrl);
    return result as RepositoryModel[];
  }
}

export default ListRepositoryService;
