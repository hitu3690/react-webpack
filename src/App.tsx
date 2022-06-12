import React from "react";
import { DefaultTypelessProvider, Registry, TypelessContext } from "typeless";
import { Link } from "typeless-router";
import MainModule from "./features/main/module";

const registry = new Registry();

export const App: React.FC = () => {
  return (
    <TypelessContext.Provider value={{ registry }}>
      <MainModule />
      <br />
      <Link href="/page-a">page a</Link> | <Link href="/page-b">page b</Link>
      <br />
      Current location: {location.pathname}
    </TypelessContext.Provider>
  );
};
