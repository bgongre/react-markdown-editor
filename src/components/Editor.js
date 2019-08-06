import React, { Component } from "react";
import { FaGithubAlt } from "react-icons/fa";
import "../containers/editor.css";

class Editor extends Component {
  render() {
    return (
      <div>
        <div className="editor-container">
          <h6>
            <FaGithubAlt
              size={15}
              style={{ marginLeft: "5px", marginRight: "5px" }}
            />{" "}
            MARKDOWN EDITOR
          </h6>
          <textarea
            id="editor"
            name="textarea"
            onChange={this.props.updateState}
            value={this.props.marked}
          />
        </div>
      </div>
    );
  }
}

export default Editor;
