import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Layout from "../Components/Layout/Layout";

// pages
import Home from "../pages/Home/Home";
import Movies from "../pages/Movies/Movies";
import MovieDetails from "../pages/MovieDetails/MovieDetails";

import NotFound from "../pages/NotFound";
import routes from "../routes";

export default class App extends Component {
  state = {};

  render() {
    return (
      <Layout>
        <Switch>
          <Route path={routes.home} exact component={Home} />
          <Route path={routes.movies} exact component={Movies} />
          <Route path={routes.movieDetails} component={MovieDetails} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    );
  }
}
