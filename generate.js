const bU = process.env.baseUrl

function generateQR() {
      const url = document.getElementById('urlInput').value;
      if (url) {
        const qrImage = `${bU}/generate-qr?url=${encodeURIComponent(url)}`

        document.getElementById('qrCode').innerHTML =
          `<img src="${bU}/generate-qr?url=${encodeURIComponent(url)}" alt="QR Code" />`;

          const downloadLink = document.getElementById('downloadLink');
          downloadLink.href = qrImage;
          downloadLink.download = 'qr_code.png';
          downloadLink.style.display = 'block' 
      } else {
        alert("Please enter a URL");
      }
    }