const express = require('express');
const path = require('path');
const app = express();

// Sirve los archivos estáticos desde la carpeta dist
app.use(express.static(path.join(__dirname, 'dist')));

// Maneja cualquier otro request y devuelve el index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
