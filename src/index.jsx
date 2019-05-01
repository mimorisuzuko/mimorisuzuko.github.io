import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

if (typeof document !== 'undefined') {
	ReactDOM.hydrate(<App />, document.getElementById('root'));
}

export default App;
