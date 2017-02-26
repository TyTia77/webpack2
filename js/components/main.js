import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from'react-redux';
import store from '../store'

//layout components
import Side from './layout/sidebar/sidebar';
import Top from './layout/topbar/topbar';
import Content from './layout/content/content';

class Main extends React.Component {
    render() {
        return (
            <div className='main-container'>
                <div className='top-container'>
                    <Top/>
                </div>

                <div className='side-container'>
                    <Side/>
                </div>

                <div className='content-container'>
                    <Content/>
                </div>
            </div>
        );
    }

}

const app = document.getElementById('app');

ReactDom.render(
    <Provider store={store}>
    <Main/>
    </Provider>, app);
