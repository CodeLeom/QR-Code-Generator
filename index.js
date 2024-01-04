import express from 'express';
import qr from "qr-image";
import fs from "fs"

const app = express();
const port = 3000;

// Serve static files from public directory
app.use(express.static('public'));

// Endpoint to generate QR code
app.get('/generate-qr', (req, res) => {
  const url = req.query.url; 
  if (url) {
    const qr_img = qr.image(url, { type: 'png' });
    res.writeHead(200, {'Content-Type': 'image/png'});
    qr_img.pipe(res);
  } else {
    res.send("No URL provided");
  }
});

app.listen(port, () => console.log(`Server running at http://localhost:${port}`));
