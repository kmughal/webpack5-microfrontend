import React from "react";
const Counter = React.lazy(() => import("Remote/Counter"));
const App = () => {
  const [date, setDate] = React.useState(new Date());
  React.useEffect(() => {
    setInterval(() => {
      setDate(new Date());
    }, 10);
  }, []);
  return (
    <>
      <h1>Hello World</h1>
      <Counter comingFrom={date.toString()} />
    </>
  );
};
export default App;
