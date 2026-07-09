const fs = require('fs');
const files = ['src/pages/Home.tsx', 'src/pages/Mitra.tsx'];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Remove import
  content = content.replace(/import\s*\{\s*motion(?:,\s*AnimatePresence)?\s*\}\s*from\s*["']motion\/react["'];\n?/, '');
  content = content.replace(/import\s*\{\s*AnimatePresence(?:,\s*motion)?\s*\}\s*from\s*["']motion\/react["'];\n?/, '');
  
  // Remove AnimatePresence wrapper
  content = content.replace(/<AnimatePresence[^>]*>/g, '<>');
  content = content.replace(/<\/AnimatePresence>/g, '</>');
  
  // Replace motion tags
  content = content.replace(/<motion\.([a-zA-Z0-9]+)/g, '<');
  content = content.replace(/<\/motion\.([a-zA-Z0-9]+)>/g, '</>');
  
  // Remove motion props
  content = content.replace(/\s+(initial|animate|exit|whileInView|viewport|whileHover|variants|transition)=\{([^}]+\}*|[^>]*)\}/g, '');
  
  fs.writeFileSync(file, content);
});
console.log('Done');
