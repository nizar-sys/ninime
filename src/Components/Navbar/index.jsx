import React, { Component, Fragment } from "react";
import { Link, Redirect } from "react-router-dom";

// styling
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./Navbar.css";

// jquery
import $ from "jquery";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: "",
      onclick: false,
    };
  }
  handleSearch = (e) => {
    if (e.which === 13) {
      this.setState({
        keyword: e.target.value,
        onclick: true,
      });
    }
  };
  componentDidMount = () => {
    $(".nav-item .nav-links").on("click", (e) => {
      $(".nav-links").removeClass("active");
      $(this).addClass("active");
    });
  };
  render() {
    const { keyword } = this.state;
    return (
      <Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
          <div className="search-box-one">
            {keyword != "" ? (
              <Redirect
                to={{ pathname: `/search/:${keyword}`, state: keyword }}
              />
            ) : null}
            <input
              type="text"
              name="search"
              id="search"
              onKeyUp={(e) => this.handleSearch(e)}
              placeholder="Cari Anime..."
            />
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
                  <Link className="dropdown-item" to="/">
                    Anime OVA
                  </Link>
                  <Link className="dropdown-item" to="/">
                    Anime Special
                  </Link>
                  <Link className="dropdown-item" to="/">
                    Anime ONA
                  </Link>
                </div>
              </li>
              <li className="nav-item">
                <Link className="nav-links" to="/genre-list">
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
                {keyword != "" ? (
                  <Redirect
                    to={{ pathname: `/search/:${keyword}`, state: keyword }}
                  />
                ) : null}
                <input
                  type="text"
                  name="search"
                  id="search"
                  onKeyUp={(e) => this.handleSearch(e)}
                  placeholder="Cari Anime..."
                />
              </div>
            </ul>
          </div>
        </nav>
      </Fragment>
    );
  }
}

export default Navbar;
