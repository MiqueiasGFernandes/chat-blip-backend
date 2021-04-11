import { Request, Response } from 'express';

interface IServer {
  request: Request,
  response: Response,
  get(path: string, controller: string): Promise<void>
  closeConnection(): void
}

export default IServer;
