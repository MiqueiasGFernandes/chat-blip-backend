import { inject, injectable } from 'tsyringe';
import IConfigPort from '../../../infra/config/config.port';
import IGithubApiPort from '../../../infra/github-api/github-api.port';
import IGetOrganizationAvatarUseCase from './get-organization-avatar.use-case';

@injectable()
class GetOrganizationAvatarService implements IGetOrganizationAvatarUseCase {
  private readonly githubApiPort: IGithubApiPort;

  private readonly configPort: IConfigPort;

  constructor(
    @inject('IGithubApiPort') githubApiPort: IGithubApiPort,
    @inject('IConfigPort') configPort: IConfigPort,
  ) {
    this.githubApiPort = githubApiPort;
    this.configPort = configPort;
  }

  public async getAvatar(): Promise<Record<string, string>> {
    const organizationInfo = await this.githubApiPort
      .get(this.configPort.getString('GITHUB_API_AVATAR'));

    const avatar = organizationInfo.avatar_url;
    return avatar;
  }
}

export default GetOrganizationAvatarService;
