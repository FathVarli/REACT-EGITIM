import { useState } from "react";
import TestComp from "./TestComp";

const UseStateKavrami = () => {
  const [counter, setCounter] = useState(1);

  return (
    <>
      <TestComp setState={setCounter} counter={counter} />
    </>
  );
};

export default UseStateKavrami;
