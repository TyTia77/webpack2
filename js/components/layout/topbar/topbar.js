import React from 'react'

require('./topbar.scss');

export default class TopBar extends React.Component {
    constructor(){
        super();
        this.state = {open: true};
        this.prop = {open: true};
    }

    render() {
            return (
                <div className='topbar'>
                React Redux
                </div>
            );
    }
}
