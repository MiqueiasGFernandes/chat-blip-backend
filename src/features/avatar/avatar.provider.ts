import 'reflect-metadata';
import { container } from 'tsyringe';
import AvatarController from './avatar.controller';
import AvatarService from './avatar.service';
import GetOrganizationAvatarService from './get-organization-avatar/get-organization-avatar.service';

class AvatarProvider {
  static injectDependencies() {
    container
      .register<AvatarController>('AvatarController', { useClass: AvatarController })
      .register('IGetOrganizationAvatarUseCase', { useClass: GetOrganizationAvatarService })
      .register<AvatarService>(AvatarService, { useClass: AvatarService });
  }
}

export default AvatarProvider;
