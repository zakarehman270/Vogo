import Image from "next/image";
import { motion } from "framer-motion";

export const OverlayLoading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex gap-2">
        <motion.div
          animate={{ opacity: [1, 0.5, 1], scale: [1, 1.1, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src="/assets/logo.png"
            width={400}
            height={400}
            alt="Vogo Logo"
          />
        </motion.div>
      </div>
    </div>
  );
};
