import axios from "axios";
import React, { Component, Fragment } from "react";
import GenreListComp from "../../GenreListComp";
import Loading from "../../LoadingComp";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./GenreListPage.css";
import { Link } from "react-router-dom";

class GenreList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      genreList: [],
    };
  }

  getData = () => {
    axios
      .get(`https://kusonime-scrapper.glitch.me/api/genres`)
      .then((res) => {
        this.setState({
          isLoading: false,
          genreList: res.data,
        });
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  componentDidMount() {
    this.getData();
  }
  render() {
    const { isLoading, genreList } = this.state;
    return (
      <Fragment>
        {isLoading ? (
          <Loading />
        ) : (
          <div className="container mt-5" style={{ overflow: "hidden" }}>
            <div className="title mt-4">
              <h1>Genre List</h1>
            </div>
            <ul className="genres d-flex">
              <li>
                {genreList.length > 0
                  ? genreList.map((genre) => {
                      return (
                        <Link
                          key={genre.link.url}
                          to={{
                            pathname: `/genre/:${genre.link.url}`,
                            state: genre.link.endpoint,
                          }}
                          className="float-left"
                          title={"List Anime By Genre " + genre.title}
                        >
                          {genre.title}
                        </Link>
                      );
                    })
                  : null}
              </li>
            </ul>
          </div>
        )}
      </Fragment>
    );
  }
}
export default GenreList;
