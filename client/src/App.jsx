import { useEffect } from "react";

import Page from "./Components/3_Popular/Page";

function App() {
  useEffect(() => {
    const item = JSON.parse(localStorage.getItem("User"));
  }, []);
  return (
    <>
      <Page />
    </>
  );
}

export default App;
