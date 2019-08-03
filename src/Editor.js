import React, { Component } from "react";
import { FaGithubAlt } from "../node_modules/react-icons/fa";
import "./editor.css";

class Editor extends Component {
  render() {
    return (
      <div className="flex-container">
        <div>
          <div className="editor-header">
            <h6>
              <FaGithubAlt
                size={15}
                style={{ marginLeft: "5px", marginRight: "5px" }}
              />{" "}
              MARKDOWN EDITOR
            </h6>
            <textarea className="editor" onChange={this.props.updateState} />
          </div>
        </div>
      </div>
    );
  }
}

export default Editor;
