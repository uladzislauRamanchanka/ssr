import React from "react";
import ErrorBoundary from '../src/ErrorBoundary/ErrorBoundary'
import { Provider } from "react-redux"
import store from "../src/store";
import '../src/styles/global.css'

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
    <ErrorBoundary>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ErrorBoundary>
  </React.Fragment>
  )
}

export default MyApp
