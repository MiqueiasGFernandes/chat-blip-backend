import { Express } from 'express';
// import { injectable } from 'tsyringe';

class BaseController {
  protected readonly app: Express

  constructor(app: Express) {
    this.app = app;
  }
}

export default BaseController;
