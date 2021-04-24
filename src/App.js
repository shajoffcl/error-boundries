import React from "react";
import "./styles.css";
import ThemeUser from "./ThemeUser";

import ErrorBoundry from "./ErrorBoundry";

export default function App() {
  return (
    <div className="App">
      <ErrorBoundry>
        <ThemeUser />
      </ErrorBoundry>
    </div>
  );
}
