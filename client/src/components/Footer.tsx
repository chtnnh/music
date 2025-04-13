import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="py-12 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <a href="#hero" className="text-3xl font-bold font-montserrat mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            chtnnh
          </a>
          
          <div className="flex space-x-6 mb-8">
            <a 
              href="https://open.spotify.com/artist/7BPea1qt2laxvuxKH0vIbV?si=EYtXa_9UQnykO0wfbiuVoA" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-foreground/80 hover:text-secondary transition-colors"
              aria-label="Spotify"
            >
              <i className="fab fa-spotify text-xl"></i>
            </a>
            <a 
              href="https://music.apple.com/us/artist/chtnyh/1791359881" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-foreground/80 hover:text-secondary transition-colors"
              aria-label="Apple Music"
            >
              <i className="fab fa-apple text-xl"></i>
            </a>
            <a 
              href="https://youtube.com/@chtnnh" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-foreground/80 hover:text-secondary transition-colors"
              aria-label="YouTube"
            >
              <i className="fab fa-youtube text-xl"></i>
            </a>
            <a 
              href="https://instagram.com/chtnyh" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-foreground/80 hover:text-secondary transition-colors"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram text-xl"></i>
            </a>
            <a 
              href="mailto:music@chtnnh.me" 
              className="text-foreground/80 hover:text-secondary transition-colors"
              aria-label="Email"
            >
              <i className="far fa-envelope text-xl"></i>
            </a>
          </div>
          
          <div className="text-center">
            <p className="text-foreground/60 mb-2">
              <i className="far fa-envelope mr-2"></i> music@chtnnh.me
            </p>
            <p className="text-foreground/60 text-sm">
              &copy; {new Date().getFullYear()} chtnnh. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
