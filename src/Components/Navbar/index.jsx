import React, { Component, Fragment } from "react";
import { Link, Redirect } from "react-router-dom";

// styling
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./Navbar.css";

// jquery
import $ from "jquery";
import axios from "axios";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: "",
      onclick: false,
      seasonList: [],
    };
  }
  getData = () => {
    axios
      .get(`https://kusonime-scrapper.glitch.me/api/seasons`)
      .then((res) => {
        this.setState({
          seasonList: res.data,
        });
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
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
    this.getData();
  };
  render() {
    const { keyword, seasonList } = this.state;
    console.log(seasonList);
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
                <div
                  className="nav-links dropdown-toggle"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Anime List
                </div>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  {seasonList.length > 0 ? (
                    <Fragment>
                      <Link
                        className="dropdown-item"
                        to={{
                          pathname: `/seasons/:${seasonList[1].link.endpoint}`,
                          state: seasonList[1].link.endpoint,
                        }}
                      >
                        Anime Ova
                      </Link>
                      <Link
                        className="dropdown-item"
                        to={{
                          pathname: `/seasons/:${seasonList[2].link.endpoint}`,
                          state: seasonList[2].link.endpoint,
                        }}
                      >
                        Anime Special
                      </Link>
                      <Link
                        className="dropdown-item"
                        to={{
                          pathname: `/seasons/:${seasonList[0].link.endpoint}`,
                          state: seasonList[0].link.endpoint,
                        }}
                      >
                        Anime ONA
                      </Link>
                    </Fragment>
                  ) : null}
                </div>
              </li>
              <li className="nav-item">
                <Link className="nav-links" to="/genre-list">
                  Genres
                </Link>
              </li>
              <li className="nav-item dropdown">
                <div
                  className="nav-links dropdown-toggle"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Tahun Rilis
                </div>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  {seasonList.length > 0 ? (
                    <Fragment>
                      <Link
                        className="dropdown-item"
                        to={{
                          pathname: `/seasons/:${seasonList[43].link.endpoint}`,
                          state: seasonList[43].link.endpoint,
                        }}
                      >
                        Winter 2021
                      </Link>
                      <Link
                        className="dropdown-item"
                        to={{
                          pathname: `/seasons/:${seasonList[14].link.endpoint}`,
                          state: seasonList[14].link.endpoint,
                        }}
                      >
                        Fall 2020
                      </Link>
                      <Link
                        className="dropdown-item"
                        to={{
                          pathname: `/seasons/:${seasonList[34].link.endpoint}`,
                          state: seasonList[34].link.endpoint,
                        }}
                      >
                        Summer 2019
                      </Link>
                      <Link
                        className="dropdown-item"
                        to={{
                          pathname: `/seasons/:${seasonList[27].link.endpoint}`,
                          state: seasonList[27].link.endpoint,
                        }}
                      >
                        Spring 2020
                      </Link>
                    </Fragment>
                  ) : null}
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
