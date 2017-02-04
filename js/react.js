// import React from "react";
// import ReactDom from "react-dom";

const React = require('react');
const ReactDom = require('react-dom');

class SideNav extends React.Component {
    render() {
        var className = 'nav-container'
        return (
            <div className='test'>
                <nav>
                    wtf
                </nav>
            </div>
        );
    }
}

const app = document.getElementById('app');

ReactDom.render(<SideNav/>, app);
