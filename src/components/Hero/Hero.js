import React from 'react';
import styles from './List.scss';

class List extends React.Component {
  render() {
    return (
      <header className={styles.component}>
        <h2 className={styles.subtitle}> Rzeczy dfo roboty</h2>
      </header>
    )
  }
}

export default List;
