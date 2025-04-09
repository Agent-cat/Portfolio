import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import reactlogo from "../assets/react.svg";
import dockerlogo from "../assets/docker.svg";
import nextjslogo from "../assets/next-js.svg";
import nodejslogo from "../assets/node-js.svg";
import mongo from "../assets/mongodb.svg";
import postgresql from "../assets/postgresql.svg";
import prisma from "../assets/prisma.svg";
import langchain from "../assets/langchain.svg";

type Trail = {
  id: number;
  x: number;
  y: number;
  src: string;
};

interface CursorTrailProps {
  isActive?: boolean;
}

const TrailImage: React.FC<Trail> = ({ x, y, src }) => {
  return (
    <motion.img
      src={src}
      className="size-20 z-10 filter grayscale  pointer-events-none fixed"
      initial={{ x: x - 80, y: y - 80, opacity: 1 }}
      animate={{ y: y + 80, opacity: 0 }}
      transition={{ duration: 0.7, ease: "easeIn" }}
      alt="trail"
    />
  );
};

const CursorTrail: React.FC<CursorTrailProps> = ({ isActive = true }) => {
  const [trails, setTrails] = useState<Trail[]>([]);
  const lastTrailTime = useRef<number>(0); // tracks the last time a trail was created

  const imageList: string[] = [
    reactlogo,
    dockerlogo,
    nextjslogo,
    mongo,
    postgresql,
    prisma,
    langchain,
    
   "https://cdn-lfs.hf.co/repos/96/a2/96a2c8468c1546e660ac2609e49404b8588fcf5a748761fa72c154b2836b4c83/9cf16f4f32604eaf76dabbdf47701eea5a768ebcc7296acc1d1758181f71db73?response-content-disposition=inline%3B+filename*%3DUTF-8%27%27hf-logo.png%3B+filename%3D%22hf-logo.png%22%3B&response-content-type=image%2Fpng&Expires=1744036996&Policy=eyJTdGF0ZW1lbnQiOlt7IkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc0NDAzNjk5Nn19LCJSZXNvdXJjZSI6Imh0dHBzOi8vY2RuLWxmcy5oZi5jby9yZXBvcy85Ni9hMi85NmEyYzg0NjhjMTU0NmU2NjBhYzI2MDllNDk0MDRiODU4OGZjZjVhNzQ4NzYxZmE3MmMxNTRiMjgzNmI0YzgzLzljZjE2ZjRmMzI2MDRlYWY3NmRhYmJkZjQ3NzAxZWVhNWE3NjhlYmNjNzI5NmFjYzFkMTc1ODE4MWY3MWRiNzM%7EcmVzcG9uc2UtY29udGVudC1kaXNwb3NpdGlvbj0qJnJlc3BvbnNlLWNvbnRlbnQtdHlwZT0qIn1dfQ__&Signature=vrR%7E77uyPFqLG6ICgzJpSSPEnSlU3tX5ewO-89XtG01PebViuyLUBPv1%7EyfYJPDvTKZmXI7W8DzxoGIsSHbhPmSP1zrq22WhHdwoRzdNs-ECUc2%7EOx-Wjfi9xK07ixNYDEUtbluHjRv76XwWrnxS3Hai8H40UfKAoQ8vCnEXRP5-4DHWrfH3lnCQyRpHAtqNSO2wHFJtlaVt3%7Ej1IBvHDwIC0qF2la-kxVVy0R8DFNZAZgIgz7VkcLAhVPJuZrkEOdUMMXJHt5HGsk-Iiyl8ANYRsJfD45epUN3asxeC1GxRAKy24qzf2pMZUn148cNpU3GX7VsbiG6JnCdOvNevNA__&Key-Pair-Id=K3RPWS32NSSJCE",
   nodejslogo,
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isActive) return;

      const now = Date.now();
      const throttleDelay = 600; // milliseconds between trails (adjust as needed)

      if (now - lastTrailTime.current < throttleDelay) return;

      lastTrailTime.current = now;

      const newTrail: Trail = {
        id: now + Math.random(),
        x: e.clientX,
        y: e.clientY,
        src: imageList[Math.floor(Math.random() * imageList.length)],
      };

      setTrails((prev) => [...prev, newTrail]);

      setTimeout(() => {
        setTrails((prev) => prev.filter((t) => t.id !== newTrail.id));
      }, 3000);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isActive]);

  return (
    <>
      {trails.map((trail) => (
        <TrailImage key={trail.id} {...trail} />
      ))}
    </>
  );
};

export default CursorTrail;
