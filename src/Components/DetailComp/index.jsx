import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "./DetailComp.css";

class DetailComp extends Component {
  render() {
    const { anime } = this.props;
    return (
      <div className="container container-detail">
        <div className="judul__anime text-center">
          <h1>{anime.title}</h1>
        </div>
        <div className="sub__judul__anime text-center">
          <h2> {anime.title} </h2>
        </div>
        <div id="detail__anime">
          <img
            sizes="(max-width: 255px), 255px"
            width="225"
            height="318"
            src={anime.thumbnail}
            alt={anime.title}
          />
          <div className="info__anime">
            <div className="info__anime__detail">
              <p>
                <span>
                  <b className="float-left">Judul : </b>
                  {anime.title}, {anime.japanese}
                </span>
              </p>
              <p>
                <span>
                  <b className="float-left">Durasi : </b> {anime.durasi}
                </span>
              </p>
              <p>
                <span>
                  <b className="float-left">Status : </b>
                  {anime.status}
                </span>
              </p>
              <p>
                <span>
                  <b className="float-left">Episode : </b>
                  {anime.total_eps} Episode
                </span>
              </p>
              <p>
                <span>
                  <b className="float-left">Rating : </b>
                  {anime.score}
                </span>
              </p>
              <p>
                <span>
                  <b className="float-left">Studio : </b>
                  {anime.producers}
                </span>
              </p>
              <p>
                <span>
                  <b className="float-left">Tipe : </b>
                  {anime.type}
                </span>
              </p>
              <p>
                <span>
                  <b className="float-left">Genre : </b>
                  {anime.genre.map((genre) => {
                    return (
                      <Link
                        to={{
                          pathname: `/genre/${genre.endpoint}`,
                          state: genre,
                        }}
                      >
                        {genre.name + " "}
                      </Link>
                    );
                  })}
                </span>
              </p>
            </div>
          </div>
          <div className="sinopsis">
            <p>{anime.sinopsis}</p>
          </div>
          <br />
          {anime.list_download.length > 0 ? (
            <Fragment>
              <div className="listEps">
                <div className="batch">
                  <span className="text-batch float-left">
                    Download {anime.title}
                  </span>
                </div>
              </div>
              {anime.list_download.length > 0 ? (
                <div className="download-eps" id="downloadb">
                  <ul>
                    {anime.list_download.map((listDownload) => {
                      return (
                        <Fragment>
                          <li className="text-center">
                            <strong>{listDownload.resolusi}</strong>
                            {listDownload.link_download.map((link) => {
                              return (
                                <span>
                                  <a
                                    href={link.link}
                                    target="_blank"
                                    rel="nofollow noopener noreferrer"
                                  >
                                    {link.platform + " | "}
                                  </a>
                                </span>
                              );
                            })}
                          </li>
                        </Fragment>
                      );
                    })}
                  </ul>
                </div>
              ) : null}
            </Fragment>
          ) : null}
        </div>
      </div>
    );
  }
}

export default DetailComp;
