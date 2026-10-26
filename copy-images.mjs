import fs from 'node:fs';

const userDir = 'C:/Users/Light Moon/.gemini/antigravity-ide/brain/b84628cf-4c82-48a7-85d4-b492e90e37ca/.user_uploaded/';
const brainDir = 'C:/Users/Light Moon/.gemini/antigravity-ide/brain/b84628cf-4c82-48a7-85d4-b492e90e37ca/';
const dstDir = 'c:/wamp64/www/unvircity-frontend--/public/';

const mappings = [
  // Home hero campus photos
  { src: userDir + 'media_1792321033417.jpg', dst: dstDir + 'hero-new-1.jpg' },
  { src: userDir + 'media_1792321104174.jpg', dst: dstDir + 'hero-new-2.jpg' },
  { src: userDir + 'media_1792321143739.jpg', dst: dstDir + 'hero-new-3.jpg' },
  { src: userDir + 'media_1792321201943.png', dst: dstDir + 'hero-new-4.png' },
  { src: userDir + 'media_1792321321829.jpg', dst: dstDir + 'hero-new-5.jpg' },
  { src: userDir + 'media_1792321361152.jpg', dst: dstDir + 'hero-new-6.jpg' },
  { src: 'C:/Users/Light Moon/.gemini/antigravity-ide/brain/c736578a-3e09-4675-afd1-ea90f6bc0f86/.user_uploaded/media_1792375758261.jpg', dst: dstDir + 'hero-new-7.jpg' },
  { src: 'C:/Users/Light Moon/.gemini/antigravity-ide/brain/c736578a-3e09-4675-afd1-ea90f6bc0f86/.user_uploaded/media_1792364527692.jpg', dst: dstDir + 'hero-new-8.jpg' },

  // Faculty modern 3D icons
  { src: userDir + 'media_1792322288670.jpg', dst: dstDir + 'faculty-medicine.jpg' },
  { src: userDir + 'media_1792322307902.jpg', dst: dstDir + 'faculty-dentistry.jpg' },
  { src: userDir + 'media_1792322345887.jpg', dst: dstDir + 'faculty-pharmacy.jpg' },
  { src: 'C:/Users/Light Moon/.gemini/antigravity-ide/brain/c736578a-3e09-4675-afd1-ea90f6bc0f86/.user_uploaded/media_1792392961294.png', dst: dstDir + 'faculty-engineering.jpg' },
  { src: 'C:/Users/Light Moon/.gemini/antigravity-ide/brain/c736578a-3e09-4675-afd1-ea90f6bc0f86/.user_uploaded/media_1792392961294.png', dst: dstDir + 'faculty-engineering.png' },
  { src: 'C:/Users/Light Moon/.gemini/antigravity-ide/brain/c736578a-3e09-4675-afd1-ea90f6bc0f86/.user_uploaded/media_1792386712114.png', dst: dstDir + 'faculty-computing.jpg' },
  { src: 'C:/Users/Light Moon/.gemini/antigravity-ide/brain/c736578a-3e09-4675-afd1-ea90f6bc0f86/.user_uploaded/media_1792386712114.png', dst: dstDir + 'faculty-computing.png' },
  { src: 'C:/Users/Light Moon/.gemini/antigravity-ide/brain/c736578a-3e09-4675-afd1-ea90f6bc0f86/.user_uploaded/media_1792393118417.png', dst: dstDir + 'faculty-business.jpg' },
  { src: 'C:/Users/Light Moon/.gemini/antigravity-ide/brain/c736578a-3e09-4675-afd1-ea90f6bc0f86/.user_uploaded/media_1792393118417.png', dst: dstDir + 'faculty-business.png' },
  { src: 'C:/Users/Light Moon/.gemini/antigravity-ide/brain/31f4fb46-d87e-4079-92f7-91c759e6d024/.user_uploaded/media_1792419712678.png', dst: dstDir + 'faculty-humanities.jpg' },
  { src: 'C:/Users/Light Moon/.gemini/antigravity-ide/brain/31f4fb46-d87e-4079-92f7-91c759e6d024/.user_uploaded/media_1792419712678.png', dst: dstDir + 'faculty-humanities.png' },
  { src: 'C:/Users/Light Moon/.gemini/antigravity-ide/brain/31f4fb46-d87e-4079-92f7-91c759e6d024/.user_uploaded/media_1792399662073.png', dst: dstDir + 'faculty-elearning.jpg' },
  { src: 'C:/Users/Light Moon/.gemini/antigravity-ide/brain/31f4fb46-d87e-4079-92f7-91c759e6d024/.user_uploaded/media_1792399662073.png', dst: dstDir + 'faculty-elearning.png' },
  { src: 'C:/Users/Light Moon/.gemini/antigravity-ide/brain/31f4fb46-d87e-4079-92f7-91c759e6d024/.user_uploaded/media_1792400921139.png', dst: dstDir + 'faculty-postgraduate.jpg' },
  { src: 'C:/Users/Light Moon/.gemini/antigravity-ide/brain/31f4fb46-d87e-4079-92f7-91c759e6d024/.user_uploaded/media_1792400921139.png', dst: dstDir + 'faculty-postgraduate.png' },
];

for (const m of mappings) {
  try {
    if (fs.existsSync(m.src)) {
      fs.copyFileSync(m.src, m.dst);
      console.log(`Copied ${m.src} -> ${m.dst}`);
    } else {
      console.warn(`Source not found: ${m.src}`);
    }
  } catch (e) {
    console.error(`Error copying ${m.src}:`, e.message);
  }
}
