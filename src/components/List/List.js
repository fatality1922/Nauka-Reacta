import React from 'react';
import styles from './List.scss';

class List extends React.Component {
  render() {
    return (
      <section className={styles.component}>
        <h2 className={styles.subtitle}> Rzeczy do roboty</h2>
      </section>
    )
  }
}

export default List;
