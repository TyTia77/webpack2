import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from'react-redux';
import store from '../store'

//layout components
import Side from './layout/sidebar/sidebar';
import Top from './layout/topbar/topbar';
import Content from './layout/content/content';

// require('../../scss/index.scss');


class Main extends React.Component {
    render() {
        return (
            <main>
                <section id='topbar'>
                    <Top/>
                </section>

                <section id='sidebar'>
                    <Side/>
                </section>

                <section id='content'>
                    <Content/>
                </section>
            </main>
        );
    }

}

const app = document.getElementById('app');

ReactDom.render(
    <Provider store={store}>
    <Main/>
    </Provider>, app);
