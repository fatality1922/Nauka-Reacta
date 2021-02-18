import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import styles from './Header.scss';
import Icon from '../Icon/Icon.js';
import Container from '../Container/Container';
import Search from '../Search/SearchContainer.js';


class Header extends React.Component {

  render() {
    return (
      <header className={styles.component}>
        <Container>
          <div className={styles.wrapper}>
            <Link to='/' className={styles.logo}>
              <Icon name='check-circle' />
            </Link>
            <nav>
              <NavLink exact to='/' activeClassName='is-active'>Home</NavLink>
              <NavLink exact to='/info' activeClassName='is-active'>Info</NavLink>
              <NavLink exact to='/faq' activeClassName='is-active'>FAQ</NavLink>
            </nav>
          </div>
          <Search/>

        </Container>
      </header>
    );
  }
}

export default Header;
