import React from "react";
import "./App.css";

function App() {
  React.useEffect(() => {
    const app = document.querySelector(".App") as HTMLDivElement;

    fetch("/backend")
      .then((res) => res.json())
      .then((res) => (app.innerText = res.message))
      .catch((err) => console.log(err));
  }, []);

  return <div className="App">Goodbye World!</div>;
}

export default App;
