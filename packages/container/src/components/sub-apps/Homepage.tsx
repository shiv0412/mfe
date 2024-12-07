import React, { useRef, useEffect } from "react";
import { mount } from "homepage/Homepage";
import { useHistory } from "react-router-dom";

import { RouteHash } from "./models/SubAppModals";

const Homepage: React.FC = () => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      initialPath: history.location.pathname,
      onNavigate: (pathname: RouteHash) => {
        const nextPathname = history.location.pathname;
        if (pathname.pathname !== nextPathname) {
          history.push(nextPathname);
        }
      },
    });

    history.listen(onParentNavigate);
  }, []);

  return <div key={"homepage"} ref={ref} />;
};

export default Homepage;
