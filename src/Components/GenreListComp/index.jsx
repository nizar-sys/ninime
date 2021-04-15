import React, { Component } from "react";

class GenreListComp extends Component {
  render() {
    const { genre } = this.props;
    console.log(genre);
    return <h1>{genre.title}</h1>;
  }
}
export default GenreListComp;
