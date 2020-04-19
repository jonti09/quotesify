import React, { Component } from 'react';
import { fetchQuotes } from './api';
import styles from './App.module.css';
import backgroundImage from './assets/images/background.jpg';
import Quote from './components/Quote';

class App extends Component {
  state = {
    quote: {},
  };

  async componentDidMount() {
    const quotes = await fetchQuotes();
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    console.log(quote);
    this.setState({
      quote: quote,
    });
  }

  render() {
    return (
      <div className={styles.container}>
        <img className={styles.background} src={backgroundImage} alt="Quitesify" />
        <Quote quote={this.state.quote}></Quote>
      </div>
    );
  }
}

export default App;
