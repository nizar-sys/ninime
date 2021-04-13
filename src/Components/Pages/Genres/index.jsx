import axios from "axios";
import React, { Component, Fragment } from "react";
import CardComp from "../../CardComp";
import Loading from "../../LoadingComp";

class Genres extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      animeGenre: [],
    };
  }

  getData = () => {
    const id = this.props.location.state.toLowerCase();
    axios
      .get(`https://kusonime-scrapper.glitch.me/api/${id}/1`)
      .then((res) => {
        this.setState({
          isLoading: false,
          animeGenre: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    const { isLoading, animeGenre } = this.state;
    return (
      <Fragment>
        {isLoading ? (
          <Loading />
        ) : animeGenre.length > 0 ? (
          animeGenre.map((anime) => {
            return <CardComp anime={anime} key={anime.link.endpoint} />;
          })
        ) : null}
      </Fragment>
    );
  }
}
export default Genres;
