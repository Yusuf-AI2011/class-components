import React, { Component } from "react";

export default class MovieItem extends Component {
  render() {
    const data = this.props.data;
    let image = "";
    data.Poster
      ? (image = data.Poster)
      : (data = "https://commons.wikimedia.org/wiki/File:Image-not-found.png");
    return (
      <div className="w-50 flex flex-col justify-start items-center text-center gap-0.5 rounded-2xl border-2">
        <img className="w-50 h-70 rounded-2xl" src={image} alt={data.Title} />
        <h3>{data.Title}</h3>
        <div>
          <p>{data.Year}</p>
          <p>{data.Type}</p>
        </div>
      </div>
    );
  }
}
