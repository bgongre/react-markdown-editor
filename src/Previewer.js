import React, { Component } from "react";
import marked from "marked";
import "./previewer.css";

class Previewer extends Component {
  render() {
    const renderer = new marked.Renderer();
    renderer.link = (href, title, text) =>
      `<a target="_blank" href="${href}" title="${title}">${text}</a>`;

    marked.setOptions({
      gfm: true,
      breaks: true,
      renderer: renderer
    });

    return (
      <div>
        <div className="flex-container">
          <div className="preview-header">
            <h6>MARKDOWN PREVIEW</h6>
            <div
              id="preview"
              dangerouslySetInnerHTML={{
                __html: marked(this.props.inputState, { renderer: renderer })
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Previewer;
