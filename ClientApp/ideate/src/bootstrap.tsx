import React from "react";
import { createRoot } from "react-dom/client";
import { createMemoryHistory, createBrowserHistory } from "history";

import App from "./App";

// Mount function to start up the app
const mount = (
  element: Element,
  { onNavigate, defaultHistory, initialPath }: any
) => {
  const root = createRoot(element);
  const history =
    defaultHistory ||
    createMemoryHistory({
      initialEntries: [initialPath],
    });

  if (onNavigate) {
    history.listen(onNavigate);
  }

  root.render(
    <React.StrictMode>
      <App history={history} />
    </React.StrictMode>
  );

  return {
    onParentNavigate({ pathname: nextPathname }: any) {
      const { pathname } = history.location;

      if (pathname !== nextPathname) {
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
