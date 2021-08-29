import React from 'react';
import ReactDOM from 'react-dom';
import Title from './components/title';

const HelloWorld = () => {
    return (
        <Title />
    );
}

ReactDOM.render(<HelloWorld />, document.getElementById("root"));

