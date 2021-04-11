import { Response } from 'express';
import BaseController from './base.controller';

interface IGetBaseController extends BaseController {
  get(): Promise<Response>
}

export default IGetBaseController;
