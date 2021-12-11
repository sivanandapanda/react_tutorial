import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    const buttonText = {text: "click me"};
    const style = {backgroundColor: 'green', color: 'white'};

    return (
    <div>
        <label className="label" htmlFor="name">Enter name:</label>
        <input id="name" type="text" />
        <button style={style}>{buttonText.text}</button>
    </div>
    );
};

if (module.hot) {
    module.hot.accept();
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);