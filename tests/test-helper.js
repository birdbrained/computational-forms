import Application from '../app';
import { setApplication } from '@ember/test-helpers';
import resolver from './helpers/resolver';
import {
    start,
    setResolver
} from 'ember-qunit';


setApplication(Application.create({ autoboot: false }));
setResolver(resolver);

start();
