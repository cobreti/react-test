import {ServiceA} from './serviceA';
import {Service} from 'typedi';

@Service({global: true})
export class ServiceB {
    constructor(serviceA: ServiceA) {

    }
}

