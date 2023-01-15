import React from "react";

const Counter = ({ comingFrom }) => {
  const [counter, setCounter] = React.useState(0);

  return (
    <>
      <h1>{comingFrom ?? "No value provided"}</h1>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Increate {counter}
      </button>
    </>
  );
};

export default Counter;
