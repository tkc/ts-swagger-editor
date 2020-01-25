import * as React from "react";
import { render } from "react-dom";
import { schema } from "./schema";

function App() {
  return (
    <div
      style={{
        backgroundColor: "#282828",
        color: "#e1e1e1",
        fontSize: "15px",
        fontFamily: "Roboto,sans-serif",
        fontWeight: 400,
        padding: "30px",
      }}
    >
      <pre>
        <code>{JSON.stringify(JSON.parse(JSON.stringify(schema)), null, 2)}</code>
      </pre>
    </div>
  );
}

render(<App />, document.getElementById("root"));
