function decodeApiKey(encodedKey) {
    // Decoding the base64 encoded API key
    return atob(encodedKey);
}

async function generateCode() {
    const urlInput = document.getElementById('urlInput').value;
    const qrImage = document.getElementById('qrImage');
    const loadingOverlay = document.getElementById('loadingOverlay');
    const downloadButton = document.getElementById('downloadButton');

    if (!urlInput) {
        alert('Please enter a URL');
        return;
    }

    const encodedApiKey = 'ZWM3MzM3NDNlNG1zaGI0NTYyMWQwZjk5ZTgyNnAxMDU0Y2Zqc24xZmMxODkxZWY1MDU='; // Your base64 encoded API key

    loadingOverlay.classList.add('active');

    try {
        const response = await fetch(`https://qr-code90.p.rapidapi.com/qr?url=${encodeURIComponent(urlInput)}`, {
            method: 'GET',
            headers: {
                'x-rapidapi-key': decodeApiKey(encodedApiKey),
                'x-rapidapi-host': 'qr-code90.p.rapidapi.com'
            }
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const blob = await response.blob();
        const objectURL = URL.createObjectURL(blob);
        qrImage.src = objectURL;

        // Show the download button after the QR code is generated
        downloadButton.style.display = 'block';
    } catch (error) {
        console.error('Error generating QR code:', error);
    } finally {
        loadingOverlay.classList.remove('active');
    }
}

function downloadQRCode() {
    const qrImage = document.getElementById('qrImage');
    const link = document.createElement('a');
    link.href = qrImage.src;
    link.download = 'qr-code.png';
    link.click();
}
