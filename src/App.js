import React, { Component } from "react";
import Previewer from "./components/Previewer";
import Editor from "./components/Editor";
import "./containers/app.css";

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
        <div className="flex-container">
          <Editor id="editor" updateState={this.updateInput} marked={input} />
        </div>
        <div className="flex-container">
          <Previewer id="previewer" inputState={input} />
        </div>
      </div>
    );
  }
}

export default App;
