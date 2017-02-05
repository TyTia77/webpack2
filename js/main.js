const React = require('react');
const ReactDom = require('react-dom');

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

ReactDom.render(<Main/>, app);
