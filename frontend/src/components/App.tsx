import * as React from 'react';
import { hot } from 'react-hot-loader';
import './App.css';

interface Props {
    firstName: string;
    lastName: string;
}

const App: React.FunctionComponent<Props> = ({ firstName, lastName }) => (
    <div class="main">
        {/* {firstName} {lastName} */}
        <h1>Webpack with React & Typescript</h1>
    </div>
);

export default hot(module)(App);