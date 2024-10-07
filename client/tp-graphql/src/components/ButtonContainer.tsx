import React from "react";
import { fetchGreeting } from "../utils/fetch";
import "../styles/buttons.scss";

interface ButtonContainerProps {
  setGreeting: React.Dispatch<React.SetStateAction<string | null>>;
}

const ButtonContainer: React.FC<ButtonContainerProps> = ({ setGreeting }) => {
  return (
    <div className="button-container">
      <button
        className="button"
        onClick={() => {
          fetchGreeting().then((greeting) => {
            console.log(greeting);
            const mappedGreeting = `${greeting.message} ${greeting.name} ${greeting.id} test button`;
            setGreeting(mappedGreeting);
          });
        }}
      >
        {"Fetch Greeting 1"}
      </button>
      <button
        className="button"
        onClick={() => {
          fetchGreeting().then((greeting) => {
            console.log(greeting);
            const mappedGreeting = `${greeting.message} ${greeting.name} ${greeting.id} test button 2`;
            setGreeting(mappedGreeting);
          });
        }}
      >
        {"Fetch Greeting 2"}
      </button>
      <button
        className="button"
        onClick={() => {
          fetchGreeting().then((greeting) => {
            console.log(greeting);
            const mappedGreeting = `${greeting.message} ${greeting.name} ${greeting.id} test button 3`;
            setGreeting(mappedGreeting);
          });
        }}
      >
        {"Fetch Greeting 3"}
      </button>
      <button
        className="button"
        onClick={() => {
          fetchGreeting().then((greeting) => {
            console.log(greeting);
            const mappedGreeting = `${greeting.message} ${greeting.name} ${greeting.id} test button 4`;
            setGreeting(mappedGreeting);
          });
        }}
      >
        {"Fetch Greeting 4"}
      </button>
    </div>
  );
};

export default ButtonContainer;
