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
  // The regex needs to handle nested brackets carefully, e.g. initial={{ opacity: 0 }}
  // A simple heuristic for React props: match propName={{...}} or propName={...}
  const propsToRemove = ['initial', 'animate', 'exit', 'whileInView', 'viewport', 'whileHover', 'variants', 'transition'];
  
  propsToRemove.forEach(prop => {
    // This regex will match  prop={{ ... }} or  prop={ ... } roughly without greedy matching the whole line
    const regex = new RegExp('\\s+' + prop + '=\\{[^}]+\\}?\\}', 'g');
    content = content.replace(regex, '');
  });
  
  // also clean up any  prop={fadeIn} which is one bracket
  propsToRemove.forEach(prop => {
    const regex = new RegExp('\\s+' + prop + '=\\{[^}]+\\}', 'g');
    content = content.replace(regex, '');
  });
  
  // One more cleanup for empty variants or props left behind
  content = content.replace(/\s+variants=\{[^\}]+\}/g, '');
  
  fs.writeFileSync(file, content);
});
console.log('Done');
