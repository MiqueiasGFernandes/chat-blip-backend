import List from '../list.type';

interface IToLimeCollectionUseCase {
  toLime(value: List): Record<string, unknown>;
}

export default IToLimeCollectionUseCase;
