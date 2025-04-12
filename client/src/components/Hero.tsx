import { motion } from 'framer-motion';
import AudioWave from './AudioWave';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen pt-20 flex flex-col items-center justify-center relative hero-pattern overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-background/70 z-0"></div>
      
      {/* Floating particles for visual effect */}
      <motion.div 
        className="absolute w-32 h-32 bg-primary/20 rounded-full blur-xl top-1/4 left-1/4 z-0"
        animate={{ y: [-20, 20, -20] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute w-40 h-40 bg-secondary/20 rounded-full blur-xl bottom-1/4 right-1/3 z-0"
        animate={{ y: [20, -20, 20] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-montserrat mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              chtnnh
            </span>
          </h1>
          
          <AudioWave />
          
          <motion.p 
            className="text-xl md:text-2xl mb-8 text-foreground/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Mellow & electronic instrumental music with occasional vocals
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <a 
              href="https://open.spotify.com/artist/chtnnh" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="py-3 px-6 bg-[#1DB954] text-white rounded-full flex items-center transition hover:bg-opacity-90 font-medium"
            >
              <i className="fab fa-spotify mr-2"></i> Spotify
            </a>
            <a 
              href="https://music.apple.com/artist/chtnnh" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="py-3 px-6 bg-[#FA243C] text-white rounded-full flex items-center transition hover:bg-opacity-90 font-medium"
            >
              <i className="fab fa-apple mr-2"></i> Apple Music
            </a>
            <a 
              href="https://youtube.com/@chtnnh" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="py-3 px-6 bg-[#FF0000] text-white rounded-full flex items-center transition hover:bg-opacity-90 font-medium"
            >
              <i className="fab fa-youtube mr-2"></i> YouTube
            </a>
          </motion.div>
          
          <motion.div 
            className="mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <a href="#music" className="text-foreground/90 inline-block">
              <motion.i 
                className="fas fa-chevron-down text-2xl"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              />
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
