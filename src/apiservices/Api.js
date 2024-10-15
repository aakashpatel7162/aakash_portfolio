export default async function Api(url, method, params) {
    const apidata = {
        method: method, // Ensure the method is set correctly
        headers: {
            "Content-Type": "application/json"
        },
    };

    if (params) {
        apidata.body = JSON.stringify(params); // Stringify the body for JSON requests
    }

    try {
        const response = await fetch(url, apidata); // Pass url and apidata separately
        console.log('Response:', response);

        if (!response.ok) {
            console.error('HTTP error:', response.status, response.statusText);
            return null; // Return null for unsuccessful responses
        }

        const data = await response.json(); // Parse the JSON response
        console.log('Data:', data); // Log the data for debugging
        return data; // Return the parsed data
    } catch (error) {
        console.error('Fetch error:', error);
        return null; // Return null on error
    }
}
