import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

App = () => {
    return <h1>Hello, World!</h1>;
};

/*ReactDOM.render(<App />, document.getElementById('root'));*/
ReactDOM.render(
    ReactDOM.render(<App />),
    document.getElementById('root')
);