import React from 'react';
import styles from './App.scss';
//import List from '../List/List.js';
//import Creator from '../Creator/Creator';


class App extends React.Component {
  static propTypes = {
    title: this.propTypes.node,
    subtitle: this.propTypes.node,
  }
  
  render() {
    const { title, subtitle } = this.props;
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
        {/*
        <List {...listData} />
        */}
      </main>
    );
  }
}

export default App;
