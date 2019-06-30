import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'World'
    };
  }

  render() {
    return (
      <div>

      <header>
      <h1>Scribe</h1>
      <svg><path xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" d="M18.9361 0.723793L36.0537 12.1356L53.1714 0.723793L70.2891 12.1356L87.4068 0.723793L104.524 12.1356L121.642 0.723793L139.657 12.7334L137.863 15.4237L121.642 4.60979L104.524 16.0216L87.4068 4.60979L70.2891 16.0216L53.1714 4.60978L36.0537 16.0216L18.9361 4.60978L2.71514 15.4237L0.921608 12.7334L18.9361 0.723793Z" fill="black"/></svg>
      </header>
      <div>
        <Hello name={this.state.name} />
        <div id="creative"></div>
        <form className="form" id="addItemForm">
        <p>
          Tell us 4 books you like and our state-of-the-art Book Recommendation Engine will look deep into your soul and suggest new reads curated just for you.
        </p>
        <input
          type="text"
          className="input"
          id="addInput"
          placeholder="Title or Author"
        />
           <input
          type="text"
          className="input"
          id="addInput"
          placeholder="Title or Author"
        />
           <input
          type="text"
          className="input"
          id="addInput"
          placeholder="Title or Author"
        />
           <input
          type="text"
          className="input"
          id="addInput"
          placeholder="Title or Author"
        />
    
        <br></br>
        <br></br>
        <button className="button" onClick={}>
        Go!
        </button>
      </form>
      </div>
      <div>
      </div>

      </div>
  
    );
  }
}

render(<App />, document.getElementById('root'));
