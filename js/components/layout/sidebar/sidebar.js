import React from 'react'
import {connect} from 'react-redux'

require('./sidebar.scss');

//users
import {fetchUser} from '../../../actions/userActions'
import {testUser} from '../../../actions/userActions'

//menu items
import {getItems} from '../../../actions/menuActions'

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
    _toggle(){
        this.prop.open = !this.prop.open;
        document.querySelector('.sidebar').setAttribute('open', this.prop.open);
        document.querySelector('.content-container').setAttribute('expand', !this.prop.open);

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
        const mappedMenuItems = menus.map(e =><div className='menu-items'><span className={e.icon +' menu-items-icons'}></span> <a className='menu-items-link' key={e.id} href={e.link}>{e.label}</a></div>)

        if (this.prop.open){
            return (
                <div className='sidebar'>
                    <div className='toggle-icon-container'>
                        <span class="fa fa-bars collapsed-menu toggle-icon" aria-hidden="true" onClick={this._toggle.bind(this)}></span>
                    </div>
                    <nav>
                    {mappedMenuItems}
                    </nav>
                </div>
            );
        } else if (!this.prop.open){
            return (
                <div className='sidebar' >\
                    <span class="fa fa-bars collapsed-menu" aria-hidden="true" onClick={this._toggle.bind(this)}></span>
                </div>
            )
       }
    }

}
