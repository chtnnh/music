import { motion } from 'framer-motion';

// Define track data
const tracks = [
  {
    title: "Midnight Dreams",
    releaseDate: "March 2023",
    cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    tags: ["electronic", "mellow", "instrumental"],
    links: {
      spotify: "https://open.spotify.com/artist/chtnnh",
      apple: "https://music.apple.com/artist/chtnnh",
      youtube: "https://youtube.com/@chtnnh"
    }
  },
  {
    title: "Aurora Waves",
    releaseDate: "January 2023",
    cover: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    tags: ["electronic", "vocals", "ambient"],
    links: {
      spotify: "https://open.spotify.com/artist/chtnnh",
      apple: "https://music.apple.com/artist/chtnnh",
      youtube: "https://youtube.com/@chtnnh"
    }
  }
];

// Define studio images
const studioImages = [
  {
    src: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    alt: "Electronic music instruments"
  },
  {
    src: "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    alt: "Music studio atmosphere"
  },
  {
    src: "https://images.unsplash.com/photo-1626285861696-9f0bf5a49c6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    alt: "Mellow electronic music aesthetic"
  },
  {
    src: "https://images.unsplash.com/photo-1631145723121-a9628eeb6e90?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    alt: "Music performance"
  }
];

const Music = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="music" className="py-20 bg-background relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent inline-block">
            My Music
          </h2>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            Listen to my releases on your favorite platforms. My debut album is coming later this year!
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {tracks.map((track, index) => (
            <motion.div 
              key={index}
              className="bg-card rounded-2xl overflow-hidden shadow-lg border border-primary/10 transition-all duration-300 hover:translate-y-[-10px]"
              variants={item}
            >
              <div className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-full md:w-1/3">
                    <div className="aspect-square rounded-xl overflow-hidden">
                      <img 
                        src={track.cover} 
                        alt={`${track.title} artwork`} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  <div className="w-full md:w-2/3">
                    <h3 className="text-xl font-montserrat font-bold mb-2">{track.title}</h3>
                    <p className="text-foreground/70 mb-4 font-mono text-sm">Released: {track.releaseDate}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {track.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="px-3 py-1 bg-primary/20 text-secondary text-xs rounded-full">
                          #{tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex flex-wrap gap-3">
                      <a href={track.links.spotify} target="_blank" rel="noopener noreferrer" className="text-sm text-foreground hover:text-secondary transition-colors">
                        <i className="fab fa-spotify mr-1"></i> Spotify
                      </a>
                      <a href={track.links.apple} target="_blank" rel="noopener noreferrer" className="text-sm text-foreground hover:text-secondary transition-colors">
                        <i className="fab fa-apple mr-1"></i> Apple Music
                      </a>
                      <a href={track.links.youtube} target="_blank" rel="noopener noreferrer" className="text-sm text-foreground hover:text-secondary transition-colors">
                        <i className="fab fa-youtube mr-1"></i> YouTube
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Album Preview */}
        <motion.div 
          className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl p-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/3">
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1535712376154-16a4ef01b3b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Upcoming album artwork" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-4 -right-4 bg-primary text-white text-sm py-1 px-3 rounded-full font-medium shadow-lg">
                  Coming Soon
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-2/3 text-center md:text-left">
              <h3 className="text-2xl font-montserrat font-bold mb-3">Debut Album</h3>
              <p className="text-foreground/90 mb-4">
                My first full-length album is set to release later this year, featuring a collection of introspective electronic tracks that blend mellow tones with dynamic electronic elements.
              </p>
              <div className="inline-block border border-secondary/50 rounded-full py-2 px-5 text-secondary">
                <i className="far fa-calendar-alt mr-2"></i> Coming in 2023
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Studio Images Grid */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, staggerChildren: 0.1 }}
        >
          {studioImages.map((image, index) => (
            <motion.div 
              key={index}
              className="rounded-xl overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Music;
