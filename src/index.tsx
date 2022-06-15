import React from "react";
import ReactDOM from "react-dom";
import { Hmr, Registry, startHmr, TypelessContext } from "typeless";
import { Link } from "typeless-router";
import MainModule from "./features/main/module";

const registry = new Registry();

const MOUNT_NODE = document.getElementById("root");
const render = () => {
  ReactDOM.unmountComponentAtNode(MOUNT_NODE);
  ReactDOM.render(
    <Hmr>
      <TypelessContext.Provider value={{ registry }}>
        <MainModule />
        <br />
        <Link href="/page-a">page a</Link> | <Link href="/page-b">page b</Link>
        <br />
        Current location: {location.pathname}
      </TypelessContext.Provider>
    </Hmr>,
    MOUNT_NODE
  );
};

if (module.hot) {
  module.hot.accept(() => {
    startHmr();
    render();
  });
}
render();
