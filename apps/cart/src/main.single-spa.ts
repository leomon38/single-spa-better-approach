import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import App from './app/app';

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App,
  domElementGetter: () => document.querySelector('.micro-app-host'),
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
    return null;
  },
});

export const { bootstrap, mount, unmount } = lifecycles;
