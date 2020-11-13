import React from "react";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";
import { Provider } from "react-redux";
import store from "./store";
import Home from "./Pages/Home";
import SearchPage from "./Pages/SearchPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PageNotFound from "./Pages/PageNotFound";
import FilmDescription from "./Pages/FilmDescription";

function App() {
  return (
    <>
      <ErrorBoundary>
        <Provider store={store}>
          <Router>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route exact path="/search" component={SearchPage} />
              <Route exact path="/film/:id" component={FilmDescription} />
              <Route path="*" component={PageNotFound} />
            </Switch>
          </Router>
        </Provider>
      </ErrorBoundary>
    </>
  );
}

export default React.memo(App);
