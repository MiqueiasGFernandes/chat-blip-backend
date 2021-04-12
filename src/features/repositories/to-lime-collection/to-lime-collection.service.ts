import { injectable } from 'tsyringe';
import List from '../list.type';
import IToLimeCollectionUseCase from './to-lime-collection.use-case';

@injectable()
class ToLimeCollectionService implements IToLimeCollectionUseCase {
  public toLime(value: List): Record<string, unknown> {
    const { avatar, fiveFirstRepositories } = value;
    const items = fiveFirstRepositories.map((repository) => ({
      header: {
        type: 'application/vnd.lime.media-link+json',
        value: {
          title: repository.name,
          text: repository.description,
          type: 'image/jpeg',
          uri: avatar,
        },
      },
    }));
    const result = {
      itemType: 'application/vnd.lime.document-select+json',
      items,
    };
    return result;
  }
}

export default ToLimeCollectionService;
