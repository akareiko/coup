// 'use client';
// import { motion } from "motion/react";
// import { useState } from "react"; 
// import Grid from "@/components/grid.jsx";
// import Flot from "@/components/float.jsx";

// export default function Home() {

//   const [showText, setShowText] = useState(false);

//   const handleClick = () => {
//     setShowGrid(prevShowGrid => !prevShowGrid);
//   };

//   const [showGrid, setShowGrid] = useState(false);
  

//   return (
//     <main>
//       <div className="centered-button-container">
//         <motion.button
//           onClick={handleClick}
//           className="glass-button" 
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//         >
//             Click Me
//         </motion.button>
//       </div>

//       {showGrid && (
//         <motion.div
//           className="flex flex-row min-h-screen justify-center items-center"
//           initial={{ transform: "translateY(200px)" }}
//           animate={{ transform: "translateY(0px)" }}
//           transition={{ type: "spring" }}
//         >
//           <div className="flex flex-col">
//           <div>Busan</div>
//           <Grid></Grid>
//           </div>
//         </motion.div>
//       )}

//       <Flot></Flot>
//     </main>
//   );
// }

{/* <div
            className="bg-white fixed bottom-0 right-0 w-2/5 h-10 mr-4 mb-4"
          >
            <p className="text-black">
              Abduction of Europa, 1727 by Noël-Nicolas Coypel</p>
          </div> */}



{/* <div className="content-overlay"></div> */}



{/* <label className="fixed inline-flex top-0 left-0 items-center cursor-pointer mt-4 ml-4 z-50">
    <input type="checkbox" value="" className="sr-only peer" checked={showSpline} onChange={() => setShowSpline(!showSpline)}></input>
    <div className="relative w-9 h-5 bg-gray-200/50 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 dark:peer-focus:ring-white rounded-full peer dark:bg-gray-700/50 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-black"></div>
    <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">turbo</span>
</label> */}





// 'use client';
// import SplineMain from './splineMain';
// import React, { useState } from 'react';

// export default function SplineSceneMain() {
//   const [showSpline, setShowSpline] = useState(false);
//   return (
//     <>
//       {showSpline ? (
//         <div className="bg-gradient-to-t from-black to-blue-900 h-screen"></div>
//       ) : (
//         <SplineMain />
//       )}
    //   <label className="fixed inline-flex top-0 left-0 items-center cursor-pointer mt-4 ml-4 z-50">
    //       <input type="checkbox" value="" className="sr-only peer" checked={showSpline} onChange={() => setShowSpline(!showSpline)}></input>
    //       <div className="relative w-9 h-5 bg-gray-200/50 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 dark:peer-focus:ring-white rounded-full peer dark:bg-gray-700/50 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-black"></div>
    //       <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">turbo</span>
    //   </label>
//     </>
//   );
// }
