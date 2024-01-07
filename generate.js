//If you are using a local server, change the `process.env.BASE_URL` to `localhost:3000`
const BASE_URL = process.env.BASE_URL;

const form = document.getElementById("qrCodeForm");
const urlRegex =
  /^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/i;

form.addEventListener("submit", (e) => {
  // prevent form reload on submit
  e.preventDefault();
  generateQR();
});

function generateQR() {
  const url = document.getElementById("urlInput").value;
  if (url) {
    if (!urlRegex.test(url)) {
      alert("Please enter a valid URL");
      return;
    }

    const qrImage = `${BASE_URL}/generate-qr?url=${encodeURIComponent(url)}`;

    document.getElementById(
      "qrCode"
    ).innerHTML = `<img src="${BASE_URL}/generate-qr?url=${encodeURIComponent(
      url
    )}" alt="QR Code" />`;

    const downloadLink = document.getElementById("downloadLink");
    downloadLink.href = qrImage;
    downloadLink.download = "qr_code.png";
    downloadLink.style.display = "block";
  } else {
    alert("Please enter a URL");
  }
}
