import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery';

class App extends Component {
  componentDidMount() {
    $(() => {
      window.recurly.configure({
        publicKey: "ewr1-tgjkZBrY3eLDBSHgbWfXv9",
        fields: {
          all: {
            style: {
              fontFamily: 'Droid Sans',
              fontSize: '14px',
              fontColor: 'green',
              fontWeight: 'bold',
              fontVariant: 'small-caps',
              fontStyle: 'italic',
              lineHeight: '1em',
              placeholder: {
                color: 'gray !important',
                fontWeight: 'bold'
              }
            }
          },
          number: {
            style: {
              fontColor: '#000000',
              placeholder: {
                content: 'Credit Card Number'
              }
            }
          },
          month: {
            style: {
              fontColor: '#000000',
              placeholder: {
                content: 'Month'
              }
            }
          },
          year: {
            style: {
              fontColor: '#000000',
              placeholder: {
                content: 'Year'
              }
            }
          },
          cvv: {
            style: {
              fontColor: '#000000',
              placeholder: {
                content: 'CVV'
              }
            }
          }
        }
      });
    });

  }

  handleFormSubmit(e) {
    e.preventDefault();

    window.recurly.token(document.querySelector("#recurly_form"), (err, token) => {
      if (err) {
        console.error(err);
      } else {
        console.info(token);
      }
    });

  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <form id="recurly_form">

          <div data-recurly="number"></div>
          <div data-recurly="month"></div>
          <div data-recurly="year"></div>
          <div data-recurly="cvv"></div>
          <input type="text" placeholder="First Name" data-recurly="first_name" id="first_name"/>
          <input type="text" placeholder="Last Name" data-recurly="last_name" id="last_name"/>
          <input type="hidden" value="US" data-recurly="country"/>
          <button onClick={this.handleFormSubmit} >
            Place order
          </button>
        </form>

      </div>
    );
  }
}

export default App;
