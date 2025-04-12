import { motion } from 'framer-motion';

const AudioWave = () => {
  const bars = 12;
  
  return (
    <div className="audio-wave flex items-center justify-center h-[60px] mb-8">
      {[...Array(bars)].map((_, i) => {
        // Get a height value that varies based on index position
        const getHeight = () => {
          if (i % 5 === 0) return 'h-8';
          if (i % 4 === 0) return 'h-20';
          if (i % 3 === 0) return 'h-12';
          if (i % 2 === 0) return 'h-16';
          return 'h-14';
        };
        
        // Get delay value based on index
        const getDelay = () => {
          if (i % 5 === 0) return 0.8;
          if (i % 4 === 0) return 0.6;
          if (i % 3 === 0) return 0.4;
          if (i % 2 === 0) return 0.2;
          return 0;
        };
        
        return (
          <motion.div
            key={i}
            className={`wave-bar w-1 mx-[2px] rounded-[2px] bg-gradient-to-b from-primary to-secondary ${getHeight()}`}
            animate={{ scaleY: [1, 0.5, 1] }}
            transition={{
              duration: 1.2,
              ease: "easeInOut",
              repeat: Infinity,
              delay: getDelay(),
            }}
          />
        );
      })}
    </div>
  );
};

export default AudioWave;
