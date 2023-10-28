// import { useRef } from "react";

// import Page from "./component/page";
// import Grid from "./component/grid";

// function App() {
//   const firstCatRef = useRef(null);
//   const secondCatRef = useRef(null);
//   const thirdCatRef = useRef(null);

//   function handleScrollBy(ref) {
//     console.log(ref);
//     if (ref && ref.current) {
//       const offsetTop = ref.current.offsetTop;
//       window.scrollBy({
//         top: offsetTop,
//         behavior: "smooth",
//       });
//     }
//   }

//   return (
//     <Page>
//       <Grid>
//         <button onClick={() => handleScrollBy(firstCatRef)}>Tom</button>
//         <button onClick={() => handleScrollBy(secondCatRef)}>Maru</button>
//         <button onClick={() => handleScrollBy(thirdCatRef)}>Jellylorum</button>
//       </Grid>
//       <div>
//         <ul style={{ display: "grid", gap: "500px", marginBottom: "500px" }}>
//           <li>
//             <img
//               src="https://placekitten.com/g/200/200"
//               alt="Tom"
//               ref={firstCatRef}
//             ></img>
//           </li>
//           <li>
//             <img
//               src="https://placekitten.com/g/300/200"
//               alt="Maru"
//               ref={secondCatRef}
//             ></img>
//           </li>
//           <li>
//             <img
//               src="https://placekitten.com/g/250/200"
//               alt="Jellylorum"
//               ref={thirdCatRef}
//             ></img>
//           </li>
//         </ul>
//       </div>
//     </Page>
//   );
// }

// export default App;

// //================================================

// import { useRef, useEffect, createContext } from "react";

// import Page from "./component/page";
// import Grid from "./component/grid";
// import Box from "./component/box";

// function App() {
//   const inputRef = useRef(null);

//   useEffect(() => {
//     if (inputRef && inputRef.current) {
//       inputRef.current.focus();
//     }
//   }, []);

//   return (
//     <Page>
//       <Grid>
//         <Box>
//           <input ref={inputRef} placeholder="Введіть пошту..."></input>
//         </Box>
//         <Box>
//           <input placeholder="Введіть пароль..."></input>
//         </Box>
//       </Grid>
//     </Page>
//   );
// }

// export default App;

// //================================================

// import { useRef, useEffect, useState } from "react";

// import Page from "./component/page";
// import Grid from "./component/grid";
// import Box from "./component/box";

// function App() {
//   const prevValueRef = useRef(null);

//   const [value, setValue] = useState(0);

//   useEffect(() => {
//     console.log(value, "value");
//     console.log(prevValueRef, "prevValueRef");

//     prevValueRef.current = value;
//   }, [value]);

//   const handleIncrement = () => {
//     setValue(value+1);
//   };

//   return (
//     <Page>
//       <Grid>
//         <Box>
//           <p>Current value: {value}</p>
//         </Box>
//         <Box>
//           <button onClick={handleIncrement}>Increment</button>
//         </Box>
//       </Grid>
//     </Page>
//   );
// }

// export default App;

// //================================================

// import { useRef, useEffect, useState } from "react";

// import Page from "./component/page";
// import Grid from "./component/grid";
// import Box from "./component/box";

// function App() {
//   const prevValueRef = useRef(null);
//   // const prevValueRef = useRef("null");
//   // const prevValueRef = useRef({ test: null });

//   const [value, setValue] = useState(0);
//   // const [value, setValue] = useState();

//   console.log(value, "value app");
//   console.log(prevValueRef, "prevValueRef app");

//   useEffect(() => {
//     console.log(value, "value");
//     console.log(prevValueRef, "prevValueRef");

//     prevValueRef.current = value;
//   }, [value]);

//   const handleIncrement = () => {
//     setValue(value + 1);
//   };

//   console.log("render");

//   return (
//     <Page>
//       <Grid>
//         <Box>
//           <p>Current value: {value}</p>
//           <p>Perious value: {prevValueRef.current}</p>
//         </Box>
//         <Box>
//           <button onClick={handleIncrement}>Increment</button>
//         </Box>
//       </Grid>
//     </Page>
//   );
// }

// export default App;

// //================================================

// import { useRef, useEffect, useState } from "react";

// import Page from "./component/page";
// import Grid from "./component/grid";
// import Box from "./component/box";

// function App() {
//   const prevValueRef = useRef(null);
//   // const prevValueRef = useRef("null");
//   // const prevValueRef = useRef({ test: null });

//   const [value, setValue] = useState(0);
//   // const [value, setValue] = useState();

//   console.log(value, "value app");
//   console.log(prevValueRef, "prevValueRef app");

//   useEffect(() => {
//     // prevValueRef.test = true;

//     console.log(value, "value");
//     console.log(prevValueRef, "prevValueRef");

//     prevValueRef.current = value;

//     console.log(prevValueRef, "prevValueRef 2");
//   }, [value]);

//   const handleIncrement = () => {
//     setValue(value + 1);
//   };

//   useEffect(() => {
//     console.log("new prevValueRef", prevValueRef);
//   }, [prevValueRef.current]);

//   console.log("render");

//   return (
//     <Page>
//       <Grid>
//         <Box>
//           <p>Current value: {value}</p>
//           <p>Perious value: {prevValueRef.current}</p>
//         </Box>
//         <Box>
//           <button onClick={handleIncrement}>Increment</button>
//         </Box>
//       </Grid>
//     </Page>
//   );
// }

// export default App;

//================================================

import { useRef, useEffect, useState } from "react";

import Page from "./component/page";

function App() {
  const scrollPositionRef = useRef(0);

  const handleScroll = () => {
    console.log(scrollPositionRef);
    scrollPositionRef.current = window.scrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      console.log("scrollPositionRef", scrollPositionRef);
    };
  }, [scrollPositionRef.current]);

  console.log("render");

  return (
    <Page>
      <button onClick={handleScroll}>Click</button>
      <p style={{ height: 10000 }}></p>
    </Page>
  );
}

export default App;
