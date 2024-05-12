import React, { Component } from "react";
import ReactDOM from "react-dom";
import UploaderComponent from "./components/uploader";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fileCount: 0,
      startFetch: false
    };
    this.startFetch = this.startFetch.bind(this);
  }

  handleCount(e) {
    this.setState({ fileCount: e.state.uploadedFiles.length });
  }

  startFetch() {
    this.setState({
      startFetch: true
    });
    // Call fetchFileSize directly after setting startFetch to true
    this.uploaderComponentRef.fetchFileSizeForAllFiles();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="info">
            <button className="fetch" onClick={this.startFetch}>
              Fetch
            </button>
            <div className="count">
              <h1 className="num">{this.state.fileCount}</h1>
              <p className="text">File/s uploaded</p>
            </div>
          </div>
        </header>
        <UploaderComponent
          ref={(ref) => (this.uploaderComponentRef = ref)}
          fileCount={this.handleCount.bind(this)}
          startFetch={this.state.startFetch}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
