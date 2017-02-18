import React from 'react'
import {connect} from 'react-redux'

//users
import {fetchUser} from '../actions/userActions'
import {testUser} from '../actions/userActions'

//menu items
import {getItems} from '../actions/menuActions'

@connect((store) => {
    return {
        users: store.users.users,
        fetched: store.users.fetched,
        error: store.users.error,
        menus: store.menus.items
    };
})

export default class SideBar extends React.Component {
    constructor(){
        super();
        this.state = {open: true};
        this.prop = {open: true};
    }

    // on initial load
    componentWillMount(){
        this.props.dispatch(fetchUser());
        this.props.dispatch(getItems());
    }

    // functions
    _toggle(e){
        this.prop.open = !this.prop.open;
        var test = document.querySelector('.sidebar').setAttribute('open', this.prop.open);

        //force an update on the dom
        // this.setState();
        this.forceUpdate();
    }

    changeName(){
        this.props.dispatch(testUser());
    }

    render() {
        console.log(this.props);
        console.log(this.prop.open);

        const {user, menus} = this.props;

        // mapping things in array/object to be repeated in dom
        const mappedMenuItems = menus.map(e => <a className='menu-items' key={e.id} href={e.link}>{e.label}</a>)

        if (this.prop.open){
            return (
                <div className='sidebar' onClick={this._toggle.bind(this)}>
                    <nav>
                    {mappedMenuItems}
                    </nav>
                    <button onClick={this.changeName.bind(this)}>click me</button>
                </div>
            );
        } else if (!this.prop.open){
            return (
                <div className='sidebar' onClick={this._toggle.bind(this)}>\
                    <i class="fa fa-bars collapsed-menu" aria-hidden="true"></i>
                </div>
            )
       }

    }
    
}
