import React, { Component } from 'react';
import { connect } from 'react-redux';

class Hamburgers extends Component {
    constructor(props) {
        super(props);

        this.state = { collapsed: false };
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {}

    render() {
        return (
            <button
                className="o-hamburger o-hamburger--squeeze hidden-lg-up float-right"
                type="button"
                onClick={this.toggleMenu()}
            >
                <span className="o-hamburger-box">
                    <span className="o-hamburger-inner" />
                </span>
            </button>
        );
    }
}

function mapStateToProps(state) {
    return { collapsed: state.collapsed };
}

export default connect(mapStateToProps)(Hamburgers);
