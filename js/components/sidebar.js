import React from 'react'
import {connect} from 'react-redux'
import {fetchUser} from '../actions/userActions'

@connect((store) => {
    return {
        users: store.users.users,
        fetched: store.users.fetched,
        error: store.users.error
    };
})

export default class SideBar extends React.Component {
    constructor(){
        super();
        this.state = {value: 'sidebar'};
        this.prop = {open: true};
    }

    testTT(e){
        this.prop.open = !this.prop.open;
        var test = document.querySelector('.sidebar').setAttribute('open', this.prop.open);
    }

    componentWillMount(){
        this.props.dispatch(fetchUser());
    }

    render() {
        console.log(this.props);
        return (
            <div className='sidebar' onClick={this.testTT.bind(this)}>
                {this.state.value} <br/>
                {this.props.users.name}
            </div>
        );
    }
}
