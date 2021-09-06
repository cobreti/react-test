import 'reflect-metadata';
import LibTitle from './components/libTitle';
import React from 'react';
import ReactDOM from 'react-dom';
import {Container} from 'typedi';
import {ServiceA} from '@services/serviceA';
import {ServiceB} from '@services/serviceB';

export class App {

    init() {
        const serviceA = Container.get(ServiceA);
        const serviceB = Container.get(ServiceB);
        console.log('test');
    }

    run() {
        const HelloWorld = () => {
            return (
                <LibTitle />
            );
        };

        ReactDOM.render(<HelloWorld />, document.getElementById("root"));
    }
}
