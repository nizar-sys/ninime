import axios from "axios";
import React, { Component, Fragment } from "react";
import Loading from "../../LoadingComp";
import CardComp from "../../CardComp";
import "./Home.css";

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      anime: [],
    };
  }

  getData = () => {
    axios
      .get(`https://kusonime-scrapper.glitch.me/api/page/1`)
      .then((res) => {
        this.setState({
          isLoading: false,
          anime: res.data,
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
    const { anime, isLoading } = this.state;
    return (
      <Fragment>
        {isLoading ? (
          <Loading />
        ) : anime.length > 0 ? (
          anime.map((anime) => {
            return <CardComp anime={anime} key={anime.link.endpoint} />;
          })
        ) : null}
      </Fragment>
    );
  }
}
export default HomePage;
