import {Service} from 'typedi';
import {ServiceA} from '@services/serviceA';

@Service({global: true})
export class ServiceB {
    constructor(serviceA: ServiceA) {

    }
}

