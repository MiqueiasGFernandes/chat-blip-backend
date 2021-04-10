import 'reflect-metadata';
import { container } from 'tsyringe';
import InjectAll from '../infra/di/inject-all';

InjectAll.execute();

container.resolve('AppStart');
