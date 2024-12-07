import React from "react";
import ReactDOM from "react-dom";
import { createMemoryHistory, createBrowserHistory } from "history";

import App from "./App";
import { RouteHash } from "./components/models/SharedModals";

// Mount function to start up the app
const mount = (
  element: Element,
  { onNavigate, defaultHistory, initialPath }: any
) => {
  const history =
    defaultHistory ||
    createMemoryHistory({
      initialEntries: [initialPath],
    });

  if (onNavigate) {
    history.listen(onNavigate);
  }

  ReactDOM.render(<App history={history} />, element);

  return {
    onParentNavigate(pathname: RouteHash) {
      const nextPathname = history.location.pathname;

      if (pathname.pathname !== nextPathname) {
        history.push(nextPathname);
        // ReactDOM.unmountComponentAtNode(element);
      }
    },
  };
};

// Conditions to check if we are in dev and in isolation
// call mount immediately
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_marketing-dev-root");

  if (devRoot) {
    mount(devRoot, { defaultHistory: createBrowserHistory() });
  }
}

// we are running through container
// and we should export the mount function
export { mount };
