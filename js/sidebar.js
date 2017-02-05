const React = require('react');



export default class SideBar extends React.Component {
    constructor(){
        super();
        this.state = {value: 'sidebar'};
        this.prop = {open: true};
    }

    testTT(e){
        console.log(e.target);
        this.prop.open = !this.prop.open;
        var test = document.querySelector('.sidebar').setAttribute('open', this.prop.open);
    }

    render() {
        return (
            <div className='sidebar' onClick={this.testTT.bind(this)}>
                {this.state.value}
            </div>
        );
    }
}
