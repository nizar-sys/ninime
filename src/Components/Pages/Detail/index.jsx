import axios from "axios";
import React, { Component, Fragment } from "react";
import DetailComp from "../../DetailComp";
import Loading from "../../LoadingComp";

class AnimeDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      animeDetail: [],
    };
  }

  getData = () => {
    const endpoint = this.props.location.state;
    axios
      .get(`https://kusonime-scrapper.glitch.me/api/anime/${endpoint}`)
      .then((res) => {
        this.setState({
          isLoading: false,
          animeDetail: res.data,
        });
      });
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    const { isLoading, animeDetail } = this.state;
    return (
      <Fragment>
        {isLoading ? <Loading /> : <DetailComp anime={animeDetail} />}
      </Fragment>
    );
  }
}
export default AnimeDetail;
