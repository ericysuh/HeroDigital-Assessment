import React from "react";
import SignupForm from "../SignupForm/SignupForm";

import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.app}>
      <SignupForm />
    </div>
  );
}

export default App;
