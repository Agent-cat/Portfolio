// import { useEffect, useState } from "react"
// import { mix, motion } from "framer-motion"
// import { text } from "framer-motion/client";
// interface CustomCursorProps {
//   cursorVarients: string;
//   setcursorVariants: React.Dispatch<React.SetStateAction<string>>;
// }

// const CustomCursor = ({ cursorVarients, setcursorVariants }: CustomCursorProps) => {
//   const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  
//   useEffect(() => {
 

//     const mousemove = (event: MouseEvent) => {
//       setCursorPosition({
//         x: event.clientX,
//         y: event.clientY
//       })

//     }
    
//       window.addEventListener("mousemove", mousemove)

//       return () => {
//         window.removeEventListener("mousemove", mousemove)
//       }
//     }
//   , [])

//   const variants = {
//     default:{
//       x:cursorPosition.x - 16,
//       y:cursorPosition.y - 16,
//     },
//     text:{
//       x:cursorPosition.x - 75,
//       y:cursorPosition.y - 75,
//       height:150,
//       width:150,
//       backgroundColor:"#c8c8c8",
//       zIndex:100,
//       mixBlendMode:"difference",
//    }}
//   return (
//     <motion.div variants={variants} animate={cursorVarients} className="cursor">
      
//     </motion.div>
//   )
// }

// export default CustomCursor