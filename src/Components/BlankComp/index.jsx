import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./BlankComp.css";
import { Link } from "react-router-dom";

class Blank extends Component {
  render() {
    return (
      <div className="container mt-5" style={{ color: "white" }}>
        <div className="row">
          <div className="col-md-12">
            <div className="error-template">
              <h1>Oops!</h1>
              <h2>404 Not Found</h2>
              <div className="error-details">
                Gomen~ Data Anime Belum Tersedia
              </div>
              <div className="error-actions">
                <Link to="/" className="btn btn-primary btn-lg">
                  <span className="glyphicon glyphicon-home"></span>
                  Take Me Home{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Blank;
