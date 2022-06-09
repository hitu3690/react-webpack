import React from "react";
import ReactDOM from "react-dom";
import { DefaultTypelessProvider, Registry, TypelessContext } from "typeless";
import { MainModule } from "./features/main/module";

const registry = new Registry();

ReactDOM.render(
  <TypelessContext.Provider value={{ registry }}>
    <MainModule />
  </TypelessContext.Provider>,
  document.getElementById("root")
);
