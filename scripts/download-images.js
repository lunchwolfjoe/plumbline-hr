const https = require('https');
const fs = require('fs');
const path = require('path');

const images = {
  // Hero images
  'hero-office.jpg': 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80',
  'services-hero.jpg': 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80',
  'cta-bg.jpg': 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&q=80',

  // Service images
  'hr-platform.jpg': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80',
  'analytics.jpg': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80',
  'consulting.jpg': 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80',
  'training.jpg': 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80',
  'integration.jpg': 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80',

  // Team images
  'team-meeting.jpg': 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80',
  'ceo.jpg': 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80',
  'cto.jpg': 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=80',
  'cso.jpg': 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&q=80',

  // Testimonial images
  'testimonial1.jpg': 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80',
  'testimonial2.jpg': 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=80'
};

const downloadImage = (url, filename) => {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(fs.createWriteStream(path.join(__dirname, '../public/images', filename)))
          .on('error', reject)
          .once('close', () => resolve(filename));
      } else {
        response.resume();
        reject(new Error(`Request Failed With a Status Code: ${response.statusCode}`));
      }
    });
  });
};

const downloadAllImages = async () => {
  const imageDir = path.join(__dirname, '../public/images');
  
  // Ensure directory exists
  if (!fs.existsSync(imageDir)) {
    fs.mkdirSync(imageDir, { recursive: true });
  }

  console.log('Starting image downloads...');
  
  for (const [filename, url] of Object.entries(images)) {
    try {
      await downloadImage(url, filename);
      console.log(`Downloaded: ${filename}`);
    } catch (error) {
      console.error(`Error downloading ${filename}:`, error.message);
    }
  }
  
  console.log('All downloads completed!');
};

downloadAllImages(); 