// import React, { useEffect, useState } from 'react';

// const CustomCursor = () => {
//   const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setCursorPosition({ x: e.clientX, y: e.clientY });
//     };

//     window.addEventListener('mousemove', handleMouseMove);

//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, []);

//   return (
//     <div
//       className="custom-cursor"
//       style={{
//         left: `${cursorPosition.x}px`,
//         top: `${cursorPosition.y}px`,
//         transform: 'translate(-50%, -50%)', // Center the cursor
//       }}
//     />
//   );
// };

// export default CustomCursor;