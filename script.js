async function generateCode() {
    const urlInput = document.getElementById('urlInput').value;
    const qrImage = document.getElementById('qrImage');

    if (!urlInput) {
        alert('Please enter a URL');
        return;
    }

    try {
        const response = await fetch(`https://qr-code90.p.rapidapi.com/qr?url=${encodeURIComponent(urlInput)}`, {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'RAPIDAPI_KEY_PLACEHOLDER',
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
