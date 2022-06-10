import React from "react";
import { useActions } from "typeless";
import { CatActions, getCatState } from "../interface";

export function CatView() {
  const { startLoadToCat, cancelLoadToCat } = useActions(CatActions);
  const { viewType, cat, error } = getCatState.useState();

  const boxStyle: React.CSSProperties = {
    height: 200,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const renderContent = () => {
    switch (viewType) {
      case "details": {
        return (
          <>
            {cat ? (
              <img src={cat.imgUrl} style={boxStyle} />
            ) : (
              <div style={boxStyle}>No cat loaded yet</div>
            )}
            <button onClick={startLoadToCat}>
              {cat ? "Load another 😺" : "Load 😺"}
            </button>
          </>
        );
      }
      case "loading": {
        return (
          <>
            <div style={boxStyle} />
            <button onClick={cancelLoadToCat}>
              Loading... Click to cancelLoadToCat
            </button>
          </>
        );
      }
      case "error": {
        return (
          <>
            <div style={boxStyle}>
              😿 <br />
              An error occurred: {error}
            </div>
            <button onClick={startLoadToCat}>Click here to retry</button>
          </>
        );
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
      {renderContent()}
      <div style={{ marginTop: 120, fontSize: 12 }}>
        Click on load multiple times. There is 50% chance for errors.
      </div>
    </div>
  );
}
