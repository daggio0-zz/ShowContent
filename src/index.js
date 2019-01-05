import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import "./styles.css";

class Record extends React.Component {
  constructor(props) {
    super(props);

    this.state = { contect: "" };
    this.getContent = this.getContent.bind(this);
  }

  getContent(event) {
    console.log(event.key);
    if (event.key == "Enter") {
      XMLHttpRequest();
      axios
        .get("http://www.google.com.tw")
        .then(response => this.setState({ contect: console.log(response) }))
        .catch(function(error) {
          // handle error
          console.log(error);
        });
    }
  }

  render() {
    return (
      <div>
        <input type="text" onKeyUp={this.getContent} />
        <div>{this.state.contect}</div>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <h1>Hello </h1>
      <Record />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
