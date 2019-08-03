import React, { Component } from "react";
import marked from "marked";
import "./previewer.css";

class Previewer extends Component {
  render() {
    marked.setOptions({
      gfm: true,
      breaks: true
    });

    return (
      <div>
        <div className="flex-container">
          <div>
            <div className="preview-header">
              <h6>MARKDOWN PREVIEW</h6>
            <div
              className="preview-box"
              dangerouslySetInnerHTML={{
                __html: marked(this.props.inputState)
              }}
            />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Previewer;
