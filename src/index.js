import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "./components/ThemeContext";
import Background from "./components/Background";

ReactDOM.render(
  <ThemeProvider>
    <Background>
      {/* <Sidebar /> */}
      <main className="h-full overflow-y-hidden">
        <App />
      </main>
    </Background>
  </ThemeProvider>,
  document.getElementById("root")
);
