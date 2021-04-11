class NotFoundError extends Error {
  constructor(language: string) {
    super(`Repository record with language '${language}' not found`);
    this.name = 'NotFoundError';
  }
}

export default NotFoundError;
