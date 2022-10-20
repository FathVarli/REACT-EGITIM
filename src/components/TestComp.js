const TestComp = ({ counter, setState }) => {
  return (
    <>
      <div>{counter}</div>
      <button
        onClick={() => {
          setState(!counter);
        }}
      >
        Artir
      </button>
    </>
  );
};

export default TestComp;
