"use client";

import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div className={`h-full w-full`}
      initial={{ y: 0, opacity: 0 , x: 0 }}
      animate={{ y: 0, opacity: 1 , x: 0 }}
      transition={{ ease: "easeInOut", duration: 1 }}
    >
      {children}
    </motion.div>
  );
} 