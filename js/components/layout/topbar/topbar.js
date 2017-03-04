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
                <header>
                    <section>
                        <label>React Redux</label>
                    </section>

                    <section>
                        <nav>

                        </nav>
                    </section>

                    <section>
                        <i class="fa fa-user" aria-hidden="true"></i>
                    </section>
                </header>
            );
    }
}
