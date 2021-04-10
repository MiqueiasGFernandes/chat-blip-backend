import { Express } from 'express';

abstract class BaseController {
  protected readonly app: Express

  constructor(app: Express) {
    this.app = app;
  }
}

export default BaseController;
