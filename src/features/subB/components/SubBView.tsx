import React from "react";
import { useActions } from "typeless";
import { getSubBState, SubBActions } from "../interface";

export function SubBView() {
  const { decrease } = useActions(SubBActions);
  const { counter } = getSubBState.useState();

  return (
    <div>
      Module B. <br />
      Counter {counter} <br />
      <button onClick={decrease}>decrease</button>
      <small>Counter will reset if you unmount this module</small>
    </div>
  );
}
