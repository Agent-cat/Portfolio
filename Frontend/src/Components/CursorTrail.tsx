import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Trail = {
  id: number;
  x: number;
  y: number;
  src: string;
};

const TrailImage: React.FC<Trail> = ({ x, y, src }) => {
  return (
    <motion.img
      src={src}
      className="size-40 pointer-events-none fixed z-50"
      initial={{ x: x - 80, y: y - 80, opacity: 1 }}
      animate={{ y: y - 40, opacity: 0 }}
      transition={{ duration: 2.5, ease: "easeOut" }}
      alt="trail"
    />
  );
};

const CursorTrail: React.FC = () => {
  const [trails, setTrails] = useState<Trail[]>([]);

  const imageList: string[] = [
    "https://images.unsplash.com/photo-1587614382346-4ec70e388f43?auto=format&fit=crop&w=60&q=80",
  "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=60&q=80",
  "https://images.unsplash.com/photo-1602526216073-7c4b086f3082?auto=format&fit=crop&w=60&q=80"
    
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const newTrail: Trail = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
        src: imageList[Math.floor(Math.random() * imageList.length)],
      };

      setTrails((prev) => [...prev, newTrail]);

      
      setTimeout(() => {
        setTrails((prev) => prev.filter((t) => t.id !== newTrail.id));
      }, 30500);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {trails.map((trail) => (
        <TrailImage key={trail.id} {...trail} />
      ))}
    </>
  );
};

export default CursorTrail;
