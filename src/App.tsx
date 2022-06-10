import React from "react";
import { DefaultTypelessProvider, Registry, TypelessContext } from "typeless";
import MainModule from "./features/main/module";

const registry = new Registry();

export const App: React.FC = () => {
  return (
    <TypelessContext.Provider value={{ registry }}>
      <MainModule />
    </TypelessContext.Provider>
  );
};
