import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

//1. Sayfa ilk yuklendiginde calismasi
// const UseEffectKavrami = () => {
//     const text = "kirikkale";
//     const [counter,setCounter] = useState(0)
//     useEffect(() => {
//       setCounter(counter => counter + 1);
//     }, []);

//     return (
//       <>
//         <div>{counter}</div>
//       </>
//     );
//   };
//2. Sayfada herhangi bir statein degismesi durumunda calismasi
//
// const UseEffectKavrami = () => {
//     const [counter, setCounter] = useState(1);

//     useEffect(() => {
//       console.log("state degisti");
//     });

//     return (
//       <>
//         <>
//           <div>{counter}</div>
//           <button
//             onClick={() => {
//               setCounter((state) => state + 1);
//             }}
//           >
//             Artir
//           </button>
//         </>
//       </>
//     );
//   };

//   export default UseEffectKavrami;
//3. Sayfadaki herhangi bir tanimlanmis statein her degisiminde calismasi

// const UseEffectKavrami = () => {
//     const [counter, setCounter] = useState(1);

//     useEffect(() => {
//       setPayload()
//     },[]);

//     useEffect(()=>{

//     },[response])

//   useEffect(()=>{

//   },[b])

//     return (
//       <>
//         <>
//           <div>{counter}</div>
//           <button
//             onClick={() => {
//               setCounter((state) => state + 1);
//             }}
//           >
//             Artir
//           </button>
//         </>
//       </>
//     );
//   };
//
//4. sayfadaki bir state kill durumunda calismasi

const UseEffectKavrami = () => {
  const [counter, setCounter] = useState(1);

  let location = useLocation();

  useEffect(() => {
    console.log("Path: ", location.pathname);
    console.log("State: ", location.state);
  }, []);

  return (
    <>
      <>
        <div>{counter}</div>
        <button
          onClick={() => {
            setCounter((state) => state + 1);
          }}
        >
          Artir
        </button>
      </>
    </>
  );
};

export default UseEffectKavrami;
