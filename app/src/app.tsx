import 'reflect-metadata';
import Title from './components/title';
import React from 'react';
import ReactDOM from 'react-dom';
import {Container} from 'typedi';
import {ServiceA} from '@services/serviceA';
import {ServiceB} from '@services/serviceB';
import {LibTitle} from 'react-test-lib/dist';

export class App {

    init() {
        const serviceA = Container.get(ServiceA);
        const serviceB = Container.get(ServiceB);
        console.log('test');
    }

    run() {
        const HelloWorld = () => {
            return (
                <div>
                    <Title />
                    <LibTitle/>
                </div>
            )
        };

        ReactDOM.render(<HelloWorld />, document.getElementById("root"));
    }
}



