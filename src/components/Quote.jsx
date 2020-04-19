import React from 'react';
import styles from './Quotes.module.css';

export default function Quote(props) {
  const { quote } = props;
  return (
    <div className={styles.container}>
      <div className={styles.quote}>
        {
          quote.text ? (
            <React.Fragment>
              <div className={styles.quoteText}>{quote.text}</div>
              <div className={styles.quoteAuthor}>- {quote.author}</div>
            </React.Fragment>
          ) : (
            <div className={styles.quoteText}>Getting your Quote, please wait...</div>
          )
        }
      </div>
    </div>
  );
}
