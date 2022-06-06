import React from "react";
import { DefaultTypelessProvider } from "typeless";
import CounterModule from "./features/counter/module";

export const App: React.FC = () => {
  return (
    <DefaultTypelessProvider>
      <CounterModule />
    </DefaultTypelessProvider>
  );
};
