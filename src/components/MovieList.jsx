import React, { Component } from "react";
import MovieItem from "./MovieItem";

export default class MovieList extends Component {
  render() {
    const data = this.props?.data;
    console.log(data);

    return (
      <div className="flex flex-wrap justify-center gap-20">
        {data.map((item) => (
          <MovieItem key={item.imdbID} data={item} />
        ))}
      </div>
    );
  }
}
