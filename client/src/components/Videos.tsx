import { motion } from 'framer-motion';
import ReactPlayer from 'react-player/youtube';

// Define video data
const videos = [
  {
    id: "5_JVDEe5vQs",
    title: "Cabbie (Official Music Video)",
    releaseDate: "March 2024"
  },
  {
    id: "bpet5YQNgpE",
    title: "Raw (Official Visualizer)",
    releaseDate: "February 2025"
  }
];

const Videos = () => {
  return (
    <section id="videos" className="py-20 bg-card relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent inline-block">
            Videos
          </h2>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            Check out my latest music videos on YouTube
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {videos.map((video, index) => (
            <motion.div 
              key={index}
              className="bg-background rounded-2xl overflow-hidden transition-transform hover:scale-[1.02] duration-300 shadow-lg border border-primary/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="aspect-video w-full">
                <ReactPlayer
                  url={`https://www.youtube.com/watch?v=${video.id}`}
                  width="100%"
                  height="100%"
                  className="w-full h-full"
                  config={{
                    youtube: {
                      playerVars: { showinfo: 1 }
                    }
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-montserrat font-bold mb-2">{video.title}</h3>
                <p className="text-foreground/70 mb-4">{video.releaseDate}</p>
                <a 
                  href={`https://youtube.com/watch?v=${video.id}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-secondary hover:text-secondary/80 transition-colors inline-flex items-center"
                >
                  <i className="fab fa-youtube mr-2"></i>Watch on YouTube
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a 
            href="https://youtube.com/@chtnnh" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block py-3 px-8 bg-[#FF0000] text-white rounded-full transition hover:bg-opacity-90 font-medium"
          >
            <i className="fab fa-youtube mr-2"></i>Subscribe to my YouTube Channel
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Videos;
