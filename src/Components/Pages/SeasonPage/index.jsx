import axios from "axios";
import React, { Component, Fragment } from "react";
import CardComp from "../../CardComp";
import Loading from "../../LoadingComp";

class Season extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      anime: [],
    };
  }

  getData = () => {
    const endpoint = this.props.location.state;
    axios
      .get(`https://kusonime-scrapper.glitch.me/api/${endpoint}/1`)
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
    const { isLoading, anime } = this.state;
    return (
      <div style={{ marginTop: "5rem" }}>
        <Fragment>
          {isLoading ? (
            <Loading />
          ) : anime.length > 0 ? (
            anime.map((anime) => {
              return <CardComp anime={anime} key={anime.link.endpoint} />;
            })
          ) : null}
        </Fragment>
      </div>
    );
  }
}
export default Season;
