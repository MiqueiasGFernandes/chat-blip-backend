class ExternalApiError extends Error {
  constructor(url: unknown, method: string) {
    super(`An error has ocurred trying send data to: '${url}' and with '${method}' http method`);
  }
}

export default ExternalApiError;
