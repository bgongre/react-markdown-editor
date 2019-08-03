import React, { Component } from 'react';
import marked from 'marked';
import './App.css';

class App extends Component {
  constructor(){
    super();
      this.state = {
        input: ''
      }
  }

  updateInput = (e) => {
    this.setState({ input: marked(e.target.value) });
  }

  render() {

    const { input } = this.state;

    return (
      <div>
        <div>
          <textarea id="editor" onChange={this.updateInput}></textarea>
        </div>
        <div id="preview">
          <div>{input}</div>
        </div>
      </div>
    );
  }
}

export default App;
