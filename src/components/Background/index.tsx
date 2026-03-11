import { motion, useMotionTemplate, useSpring } from "motion/react";
import { useEffect } from "react";

const spring = { damping: 20, stiffness: 70 };

function Background() {
  const x = useSpring(50, spring);
  const y = useSpring(50, spring);

  const background = useMotionTemplate`radial-gradient(
    circle at ${x}% ${y}%,
    rgba(255,255,255,0.07),
    transparent 40%
  )`;

  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      x.set((e.clientX / window.innerWidth) * 100);
      y.set((e.clientY / window.innerHeight) * 100);
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return (
    <motion.div
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{ background }}
    />
  );
}

export default Background;
