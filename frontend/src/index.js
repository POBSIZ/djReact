import React from 'react';
import ReactDOM from 'react-dom';

// CSS
import './index.css';

// Components
import App from './components/App';
import Contacts from './components/test/contacts';

const rootElement = document.getElementById('root');
ReactDOM.render(
    <Contacts/>,
    rootElement
);