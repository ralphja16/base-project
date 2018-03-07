import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Navigation extends Component {
    render() {
        return (
            <nav className="m-navigation m-navigation--bar hidden-md-down ">
                <div className="l-container">
                    <div className="hidden-lg-up">
                        <a
                            className="o-logo o-logo--img hidden-lg-up"
                            href="/"
                        />

                        <button
                            className="o-hamburger o-hamburger--squeeze m-navigation__toggle is--active"
                            type="button"
                            aria-label="Toggle main navigation"
                            aria-expanded="false"
                        >
                            <span className="o-hamburger-box">
                                <span className="o-hamburger-inner" />
                            </span>
                        </button>
                    </div>

                    <ul className="m-navigation__container">
                        <li className="m-navigation__item">
                            <Link to="/">
                                <span className="icon icon-dashboard txt--blue" />{' '}
                                Dashboard
                            </Link>
                        </li>
                        <li className="m-navigation__item">
                            <Link to="/my-eggs">
                                <span className="icon icon-egg txt--blue" /> My
                                Eggs
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
