// import React, { useEffect, useState } from "react";
// import OpenSeaDragon from "openseadragon";

// const Viewer = () => {
//   const [viewer, setViewer] = useState(null);

//   useEffect(() => {
//     InitOpenseadragon();
//     return () => {
//       viewer && viewer.destroy();
//     };
//   }, []);

//   const sourceFiles = [
//     "assets/newspaper/tfnpp1/dzc_output.xml",
//     "assets/newspaper/tfnpp2/dzc_output.xml",
//     "assets/newspaper/tfnpp3/dzc_output.xml",
//     "assets/newspaper/tfnpp4/dzc_output.xml",
//     "assets/newspaper/tfnpp5/dzc_output.xml",

//     "assets/newspaper/tfnpp7/dzc_output.xml",
//     "assets/newspaper/tfnpp8/dzc_output.xml",
//   ];

//   const InitOpenseadragon = () => {
//     viewer && viewer.destroy();

//     setViewer(
//       OpenSeaDragon({
//         id: "seadragon-viewer",
//         prefixUrl: "assets/newspaper/openseadragonImages",
//         tileSources: {
//           type: string,
//           levels: {
//             url: sourceFiles,
//             height: number,
//             width: number,
//           },
//         },
//         sequenceMode: true,
//         visibilityRatio: 1.0,
//         constrainDuringPan: true,
//       })
//     );
//   };

//   return (
//     <div
//       id="seadragon-viewer"
//       style={{
//         marginTop: "80px",
//         marginLeft: "220px",
//         width: " 600px",
//         height: "",
//       }}
//     ></div>
//   );
// };

// export default Viewer;
