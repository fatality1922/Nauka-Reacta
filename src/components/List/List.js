import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import Column from '../Column/Column.js';

class List extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    children: PropTypes.node,
  }

  static defaultProps = {
    children: <p className={styles.description}>I can do all the things!!!</p>,
  }

  render() {
    return (
      <section className={styles.component}>
        <Hero titleText={this.props.title} backgroudImage={this.props.image} />

        <div className={styles.descripton}>
          {this.props.children}
        </div>

        <div className={styles.columns}>
          <Column titleText='Pilne'/>
          <Column titleText='Opcjonalne'/>
          <Column titleText='Bardziej opcjonalne'/>
        </div>
      </section>
    )
  }
}

export default List;
