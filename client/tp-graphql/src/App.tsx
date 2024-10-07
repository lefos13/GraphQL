import React from "react";
import logo from "./logo.svg";
import "./styles/App.css";
import ButtonContainer from "./components/ButtonContainer";

function App() {
  const [greeting, setGreeting] = React.useState<string | null>(null);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{greeting ?? "Waiting..."}</p>
        <ButtonContainer setGreeting={setGreeting} />
      </header>
    </div>
  );
}

export default App;
