import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

// styling
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./Navbar.css";

// jquery
import $ from "jquery";

class Navbar extends Component {
  state = {
    input: true,
  };

  componentDidMount = () => {
    $(".nav-item .nav-links").on("click", (e) => {
      $(".nav-links").removeClass("active");
      $(this).addClass("active");
    });
  };

  handleInput = (e) => {
    this.setState({
      input: false,
    });
  };
  handleInput2 = (e) => {
    this.setState({
      input: true,
    });
  };

  render() {
    const { input } = this.state;
    return (
      <Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="search-box-one">
            {input ? (
              <>
                <input type="text" name="" placeholder="Cari Anime..." />
                <span
                  className="fa fa-search "
                  onClick={(e) => this.handleInput(e)}
                ></span>
              </>
            ) : (
              <>
                <span onClick={this.handleInput2}>&times;</span>
              </>
            )}
          </div>
          <div
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
          >
            <span>
              <i className="fas fa-bars"></i>
            </span>
          </div>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-links active" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-links dropdown-toggle"
                  to="/#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Anime List
                </Link>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <Link className="dropdown-item" to="/list-anime">
                    Semua Anime List
                  </Link>
                  <Link className="dropdown-item" to="/">
                    Live-Action
                  </Link>
                  <Link className="dropdown-item" to="/">
                    Anime BD
                  </Link>
                  <Link className="dropdown-item" to="/">
                    Anime OVA
                  </Link>
                  <Link className="dropdown-item" to="/">
                    Anime Special
                  </Link>
                  <Link className="dropdown-item" to="/">
                    Movie List
                  </Link>
                  <Link className="dropdown-item" to="/">
                    Anime ONA
                  </Link>
                </div>
              </li>
              <li className="nav-item">
                <Link className="nav-links" to="/genre">
                  Genres
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-links dropdown-toggle"
                  to="/"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Tahun Rilis
                </Link>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <Link className="dropdown-item" to="/">
                    Semua Daftar Tahun Rilis
                  </Link>
                  <Link className="dropdown-item" to="/">
                    Winter 2021
                  </Link>
                  <Link className="dropdown-item" to="/">
                    Fall 2020
                  </Link>
                  <Link className="dropdown-item" to="/">
                    Summer 2020
                  </Link>
                  <Link className="dropdown-item" to="/">
                    Spring 2020
                  </Link>
                </div>
              </li>
              <div className="search-box-two">
                {this.state.input === true ? (
                  <input type="text" name="" placeholder="Cari Anime..." />
                ) : null}
                <span
                  className="fa fa-search"
                  onClick={(e) => this.handleInput(e)}
                ></span>
              </div>
            </ul>
          </div>
        </nav>
      </Fragment>
    );
  }
}

export default Navbar;
