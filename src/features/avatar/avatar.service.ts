import { inject, injectable } from 'tsyringe';
import IGetOrganizationAvatarUseCase from './get-organization-avatar/get-organization-avatar.use-case';

@injectable()
class AvatarService {
  private readonly getOrganizationAvatarUseCase: IGetOrganizationAvatarUseCase;

  constructor(
    @inject('IGetOrganizationAvatarUseCase') getOrganizationAvatarUseCase: IGetOrganizationAvatarUseCase,
  ) {
    this.getOrganizationAvatarUseCase = getOrganizationAvatarUseCase;
  }

  public async getAvatar(): Promise<Record<string, string>> {
    const avatar = await this.getOrganizationAvatarUseCase.getAvatar();
    return avatar;
  }
}

export default AvatarService;
