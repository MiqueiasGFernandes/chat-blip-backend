interface IGetOrganizationAvatarUseCase {
  getAvatar(): Promise<Record<string, string>>
}

export default IGetOrganizationAvatarUseCase;
