import React from "react";
import styles from "./App.module.css";
import Data from "../data/data4";
import GetComponent from "../components/GetComponent/GetComponent";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary.component.jsx";

const App = () => {
  return (
    <ErrorBoundary>
      <main className={styles.App}>
        <GetComponent data={Data} />
      </main>
    </ErrorBoundary>
  );
};

export default App;