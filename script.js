const url = 'https://qr-code90.p.rapidapi.com/qr?url=www.google.com';
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': 'YOUR_RAPIDAPI_KEY', // Replace with your actual RapidAPI key
        'x-rapidapi-host': 'qr-code90.p.rapidapi.com'
    }
};

try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
} catch (error) {
    console.error(error);
}
