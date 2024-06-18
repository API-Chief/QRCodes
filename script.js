function decodeApiKey(encodedKey) {
    // Decoding the base64 encoded API key
    return atob(encodedKey);
}

async function generateCode() {
    const urlInput = document.getElementById('urlInput').value;
    const qrImage = document.getElementById('qrImage');

    if (!urlInput) {
        alert('Please enter a URL');
        return;
    }

    const encodedApiKey = 'NGZlNjQ0MWFkYm1zaDVmZjg5ZGE0ZjMyM2M1Y3AxNWMzMzBqc240ODVjZjA1Mjk1MGI='; // Your base64 encoded API key

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
    } catch (error) {
        console.error('Error generating QR code:', error);
    }
}
