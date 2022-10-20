import { useNavigate } from "react-router-dom";

const UseNavigateKavrami = () => {
  let navigate = useNavigate();

  function Jump() {
    navigate("/useeffect", { state: { id: 1 } });
  }

  return (
    <>
      <button onClick={Jump}>Ileri</button>
    </>
  );
};

export default UseNavigateKavrami;
