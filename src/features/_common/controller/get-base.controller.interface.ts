import { Request, Response } from 'express';

interface IGetBaseController {
  get(request: Request, response: Response): Promise<void>
}

export default IGetBaseController;
