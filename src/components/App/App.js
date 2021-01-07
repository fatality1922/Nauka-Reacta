import React from 'react';
import styles from './App.scss';
import List from '../List/List.js';
import { pageContents, listData } from '../../data/dataStore';
//import Creator from '../Creator/Creator';

class App extends React.Component {

  // addListColumns(title){
  //   this.setState(state => (
  //     {
  //       listData: [
  //         ...state.listData,
  //         {
  //           key: state.listData.length ? state.listData[state.listData.length-1].key+1 : 0, //??
  //           title,
  //            icon: 'list-alt',
  //           /cards: [],
  //         }
  //       ]
  //     }
  //   ));
  // } robic to?


  render() {
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{pageContents.title}</h1>
        <h2 className={styles.subtitle}> {pageContents.subtitle}</h2>
        <List {...listData} />
        {/* <Creator text={settings.cardCreatorText} action={title => this.addCard(title)} />  i to?? */}
      </main>
    );
  }
}

export default App;
