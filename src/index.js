import React from "react";
import ReactDOM from "react-dom";

const initialState = "hi";

class App extends React.Component {
  state = {
    text: initialState,
  };
  handleChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };
  render() {
    return (
      <div>
        <h1 className="text-center">convert your markdown</h1>

        <div className="row">
          <div className="col-6">
            <h6>Enter your markdown here</h6>
            <textarea
              id="editor"
              className="form-control"
              value={this.state.text}
              onChange={this.handleChange}
            />
          </div>

          <div className="col-6" id="preview">
            <h6>Result is here</h6>
            <div className="preview">{this.state.text}</div>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
