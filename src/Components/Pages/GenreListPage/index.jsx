import axios from "axios";
import React, { Component, Fragment } from "react";
import GenreListComp from "../../GenreListComp";
import Loading from "../../LoadingComp";

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
        ) : genreList.length > 0 ? (
          genreList.map((genre) => {
            return <GenreListComp genre={genre} key={genre.link.url} />;
          })
        ) : null}
      </Fragment>
    );
  }
}
export default GenreList;
