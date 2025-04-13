# chtnnh Music Artist Website

A creative and sleek music artist website with custom animations, music/video showcases, and contact form integration. This project was designed for the music artist chtnnh to showcase their instrumental, mellow, and electronic music.

![chtnnh Music Artist Website](https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80)

## 🎵 Features

- **Modern Responsive Design**: Fully responsive layout that works on mobile, tablet, and desktop devices
- **Custom Animations**: Animated elements using Framer Motion throughout the site, including a custom audio wave visualization
- **Music Showcase**: Featured tracks with cover art and platform links
- **Video Integration**: YouTube video embeds using React Player
- **Contact Form**: Form with validation and Google Sheets integration for submissions
- **Interactive Elements**: Smooth scrolling navigation, hover effects, and animated sections
- **Social Media Integration**: Links to various music platforms and social media

## 🛠️ Technology Stack

- **Frontend**: 
  - React (with TypeScript)
  - Tailwind CSS for styling
  - Framer Motion for animations
  - React Hook Form for form management
  - Zod for validation
  - React Player for video embeds

- **Backend**:
  - Express server
  - Google Sheets API integration for contact form submissions
  - In-memory storage with optional database connection

## 📦 Project Structure

```
project/
├── client/               # Frontend React application
│   ├── src/
│   │   ├── components/   # UI components (Navbar, Hero, etc.)
│   │   ├── hooks/        # Custom React hooks
│   │   ├── lib/          # Utility functions
│   │   ├── pages/        # Page components
│   │   ├── App.tsx       # Main application component
│   │   └── main.tsx      # Entry point
│   └── index.html        # HTML template
├── server/               # Backend Express server
│   ├── index.ts          # Server entry point
│   ├── routes.ts         # API route definitions
│   ├── storage.ts        # Data storage implementation
│   └── vite.ts           # Vite configuration for server
├── shared/               # Shared code between client and server
│   └── schema.ts         # Data schema definitions
└── [configuration files] # Various config files for the project
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/chtnnh-music-website.git
   cd chtnnh-music-website
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5000`

## 📝 Configuration

### Google Sheets Integration

To enable the contact form to Google Sheets integration:

1. Create a Google Service Account and obtain credentials
2. Set up the following environment variables:
   - `GOOGLE_SHEETS_ID`: The ID of your Google Sheet
   - `GOOGLE_SERVICE_ACCOUNT_EMAIL`: Service account email
   - `GOOGLE_PRIVATE_KEY`: Service account private key

### Customization

- **Theme**: Modify the `theme.json` file to change the color scheme
- **Content**: Update music tracks and videos in the respective component files
- **Styling**: Tailwind CSS classes can be modified for styling adjustments

## 📋 Additional Notes

- The contact form stores submissions both in-memory and in Google Sheets (if configured)
- The site includes smooth scrolling navigation between sections
- Performance optimizations include lazy loading of videos and images

## 🔒 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👤 Contact

For any questions or inquiries about this project, please contact:

- Email: music@chtnnh.me
- YouTube: [@chtnnh](https://youtube.com/@chtnnh)
- Instagram: [@chtnyh](https://instagram.com/chtnyh)