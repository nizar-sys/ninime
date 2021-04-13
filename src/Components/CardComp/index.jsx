import React, { Component, Fragment } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./CardComp.css";
import { Link } from "react-router-dom";

class CardComp extends Component {
  render() {
    const { anime } = this.props;
    return (
      <Fragment>
        <div className="container cover" key={anime.link.endpoint}>
          <div className="post">
            <div className="thumb">
              <a>
                <div className="thumbz">
                  <img
                    width="150"
                    height="83"
                    src={anime.link.thumbnail}
                    className="attachment-thumb size-thumb wp-post-image"
                    alt={anime.title}
                    loading="lazy"
                    title={anime.title}
                    sizes="(max-width: 150px) 100vw, 150px"
                  />
                </div>
              </a>
            </div>
            <div className="content">
              <h2 className="eps" style={{ backgroundColor: "transparent" }}>
                <Link
                  to={{
                    pathname: `detail/${anime.link.endpoint}`,
                    state: anime.link.endpoint,
                  }}
                  key={anime.link.endpoint}
                >
                  {anime.title}
                </Link>
              </h2>
              <p>
                <i className="fas fa-clock"></i> {anime.release}
              </p>
              <p>
                <i className="fas fa-tag"></i> Genre{" "}
                {anime.genre.map((genre) => {
                  return (
                    <Link
                      to={{
                        pathname: `/genre/${genre}`,
                        state: `genres/${genre}/`,
                      }}
                    >
                      {genre + " , " + " "}
                    </Link>
                  );
                })}
              </p>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default CardComp;
