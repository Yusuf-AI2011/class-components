import React, { Component } from "react";
import MovieList from "./components/MovieList";
import axios from "axios";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      search: "random",
    };
  }

  getData = () => {
    this.setState({ loading: true });

    axios
      .get(`https://www.omdbapi.com/?s=${this.state.search}&apikey=1ace4818`)
      .then((data) => {
        this.setState({
          loading: false,
          data: data?.data?.Search,
        });
      })
      .catch(() => {
        console.log("Error");
      });
  };

  searchMethod = (e) => {
    e.preventDefault();
    this.getData();
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <div className="flex flex-col justify-center items-center gap-5">
        <h1>{this.state.loading ? "Loading ..." : null}</h1>
        <form className="flex justify-center items-center gap-3" onSubmit={this.searchMethod}>
          <input
            className="w-50 border-2 p-1 rounded-[10px]"
            onChange={(e) => {
              this.setState({ search: e.target.value });
            }}
            value={this.state.search}
            type="search"
            placeholder="Search movie ..."
          />
          <button className="w-20 border-2 p-0.5 rounded-[10px]" type="submit">
            Submit
          </button>
        </form>
        <MovieList data={this.state.data} />
      </div>
    );
  }
}
