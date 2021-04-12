interface IGithubApiPort {
  get(url: unknown, headers?: unknown): Promise<Record<string, any>>
}

export default IGithubApiPort;
