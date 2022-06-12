import React, { Suspense } from "react";
import { useActions } from "typeless";
import { MainActions, getMainState, ViewType } from "../interface";

/** 遅延させたいコンポーネント */
const Counter = React.lazy(() => import("../../counter/module"));
const Cat = React.lazy(() => import("../../cat/module"));
const CounterExtend = React.lazy(() => import("../../counterExtend/module"));
/** メインコンポーネント */
export function MainView() {
  // ActionsとStateを呼び出す
  const { showContent } = useActions(MainActions);
  const { viewType } = getMainState.useState();

  // 遅延コンポーネントを切り替えるTSX
  const renderContent = () => {
    switch (viewType) {
      case "counter": {
        return <Counter />;
      }
      case "cat": {
        return <Cat />;
      }
      case "counterExtend": {
        return <CounterExtend />;
      }
    }
  };

  return (
    <div
      style={{
        width: 400,
        height: 500,
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        margin: "80px auto",
        textAlign: "center",
      }}
    >
      ShowContent View:{" "}
      <select
        value={viewType || ""}
        onChange={(e) => showContent(e.target.value as ViewType)}
        placeholder="---"
      >
        <option disabled value="">
          -- select --
        </option>
        <option value="counter">Module Counter</option>
        <option value="cat">Module Cat</option>
        <option value="counterExtend">Module CounterExtend</option>
      </select>
      <div style={{ padding: 15 }}>
        <Suspense fallback={<div>Loading...</div>}>{renderContent()}</Suspense>
      </div>
      <div style={{ marginTop: 120, fontSize: 12 }}>
        Open Dev Tools, and change Network speed to "Slow 3G".
        <br />
        Choose an option from the above select.
      </div>
    </div>
  );
}
