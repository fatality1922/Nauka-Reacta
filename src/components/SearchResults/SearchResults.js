/* eslint-disable react/prop-types */
import React from 'react';
import styles from './SearchResults.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
import { settings } from '../../data/dataStore';
import Icon from '../Icon/Icon.js';


class SearchResults extends React.Component {

  static propTypes = {
    icon: PropTypes.node,
    cards: PropTypes.array,
    children: PropTypes.node,
    searchString: PropTypes.string,
    changeSearchString: PropTypes.func,
  }
  static defaultProps = {
    icon: settings.defaultColumnIcon,
  }

  componentDidMount() {
    const {changeSearchString, searchString } = this.props;
    changeSearchString(searchString);
  }
  
  render() {
    const { icon, cards, children} = this.props;
    return (
      <section className={styles.component}>

        {children}

        <div className={styles.icon}>
          <Icon name={icon} />
        </div>

        <div>
          {cards.map(cardData => (
            <Card key={cardData.id} {...cardData} />
          ))}
        </div>

      </section>
    );
  }
}

export default SearchResults;
