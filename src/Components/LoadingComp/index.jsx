import React, { Component } from "react";
import "./LoadingComp.css";

class Loading extends Component {
  render() {
    return (
      <div className="loading">
        <div className="spinner">
          <div className="spinner-two"></div>
        </div>
      </div>
    );
  }
}
export default Loading;
