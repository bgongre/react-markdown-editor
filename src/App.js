import React, { Component } from "react";
import Previewer from "./Previewer";
import Editor from "./Editor";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "# Hello"
    };
  }

  updateInput = e => {
    this.setState({ input: e.target.value });
  };

  render() {
    const { input } = this.state;

    return (
      <div>
        <div>
          <Editor id="editor" updateState={this.updateInput} />
        </div>

        <Previewer
          id="previewer"
          inputState={input}
        />
      </div>
    );
  }
}

export default App;
