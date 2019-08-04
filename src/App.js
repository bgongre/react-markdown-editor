import React, { Component } from "react";
import Previewer from "./Previewer";
import Editor from "./Editor";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: ""
    };
  }

  componentDidMount() {
    const mdPath = require("./placeholder.md");

    fetch(mdPath)
      .then(resp => {
        return resp.text();
      })
      .then(text => {
        this.setState({
          input: text
        });
      });
  }

  updateInput = e => {
    this.setState({ input: e.target.value });
  };

  render() {
    const { input } = this.state;

    return (
      <div>
        <Editor id="editor" updateState={this.updateInput} marked={input} />
        <Previewer id="previewer" inputState={input} />
      </div>
    );
  }
}

export default App;
