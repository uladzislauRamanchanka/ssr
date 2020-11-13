import React, { Component } from "react";
import classes from "./ErrorBoundary.module.css";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError)
      return (
        <h1 className={classes.ErrorBoundary}>Oops, Something wasn't right.</h1>
      );
    return this.props.children;
  }
}

export default ErrorBoundary;
