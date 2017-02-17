import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from'react-redux';
import store from '../store'

import Side from './sidebar';



class Main extends React.Component {
    render() {
        return (
            <div className='main-container'>
                <Side/>
            </div>
        );
    }
}

const app = document.getElementById('app');

ReactDom.render(
    <Provider store={store}>
    <Main/>
    </Provider>, app);
