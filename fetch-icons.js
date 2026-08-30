const fs = require('fs');
const https = require('https');
const path = require('path');

const icons = {
  python: 'python',
  javascript: 'javascript',
  nodejs: 'nodedotjs',
  react: 'react',
  typescript: 'typescript',
  html5: 'html5',
  css3: 'css3',
  java: 'java',
  kotlin: 'kotlin',
  php: 'php',
  sqlserver: 'microsoftsqlserver',
  sqlite: 'sqlite',
  git: 'git',
  github: 'github',
  linux: 'linux',
  docker: 'docker',
  nextjs: 'nextdotjs',
  tailwindcss: 'tailwindcss'
};

const dir = path.join(__dirname, 'public', 'icons');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

Object.entries(icons).forEach(([filename, iconName]) => {
  const url = `https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/${iconName}.svg`;
  const dest = path.join(dir, `${filename}.svg`);
  
  https.get(url, (res) => {
    if (res.statusCode === 200) {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        // Asegurar que el SVG use fill="currentColor" para heredar color del texto
        const modifiedSvg = data.replace(/<svg/, '<svg fill="currentColor"');
        fs.writeFileSync(dest, modifiedSvg);
        console.log(`[OK] Descargado: ${filename}.svg`);
      });
    } else {
      console.log(`[FALLBACK] No se encontró: ${iconName}, usando genérico para ${filename}`);
      // Ícono de código genérico si no se encuentra
      const genericSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>`;
      fs.writeFileSync(dest, genericSvg);
    }
  }).on('error', (err) => {
      console.error(`[ERROR] en ${filename}:`, err.message);
  });
});
