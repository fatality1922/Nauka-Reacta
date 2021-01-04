import React from 'react';
import styles from './Card.scss';

class Card extends React.Component {
    render() {
        return (
            <div className={styles.component}>
                <h3>{this.props.column.key}</h3>
                <h3>{this.props.column.title}</h3>
            </div>
        );
    }
}

export default Card;