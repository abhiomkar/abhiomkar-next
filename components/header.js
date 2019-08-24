import Link from 'next/link';
import React from 'react';
import {withRouter} from 'next/router';
import './header.scss';

class Header extends React.Component {
  state = {
    isMenuOpen: false,
  };

  toggleMenu() {
    this.setState({isMenuOpen: !this.state.isMenuOpen});
  }

  renderNavItem(href, label) {
    return (
      <Link href={href}>
        <a className={`nav-item ${this.isActive(href)}`}>{label}</a>
      </Link>
    );
  }

  isActive(href) {
    return this.props.router.pathname === href ? 'active' : '';
  }

  menuButtonClasses() {
    return `menu ${this.state.isMenuOpen ? 'is-open' : 'is-close'}`;
  }

  horizontalNavClasses() {
    return `horizontal-nav ${this.state.isMenuOpen ? 'is-visible' : ''}`;
  }

  render() {
    return (
      <div className="main-header header-container">
        <div className="header-bar">
          <button
            className={this.menuButtonClasses()}
            onClick={() => this.toggleMenu()}
          >
            <div className="line1-container">
              <div className="line line1" />
            </div>
            <div className="line2-container">
              <div className="line line2" />
            </div>
            <div className="line3-container">
              <div className="line line3" />
            </div>
          </button>
          <div>
            <a href="/">
              <h1 className="main-title">Ao.</h1>
            </a>
          </div>
        </div>

        <div className={this.horizontalNavClasses()} onClick={() => this.toggleMenu()}>
          {this.renderNavItem('/', 'Home')}
          {this.renderNavItem('/projects', 'Projects')}
          {this.renderNavItem('http://blog.abhiomkar.in', 'Blog')}
          {this.renderNavItem('/photography', 'Photography')}
          {this.renderNavItem('/contact', 'Contact')}
        </div>
      </div>
    );
  }
}

export default withRouter(Header);
