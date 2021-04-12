class KeyNotFound extends Error {
  constructor(key: string) {
    super(`Key '${key}' not found in configuration`);
    this.name = 'KeyNotFound';
  }
}

export default KeyNotFound;
