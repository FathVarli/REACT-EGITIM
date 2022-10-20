import PropsComp from "./PropsComp";

const ClassComp = () => {
  const name = "Tansel";
  return (
    <>
      <PropsComp name={name} id={1} />
    </>
  );
};

export default ClassComp;