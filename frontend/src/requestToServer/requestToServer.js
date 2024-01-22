export default async function requestToServer(url, method = 'GET', headers = {}, data = null) {
    try {
        const response = await fetch(url, {
            method: method,
            headers: headers,
            body: data ? JSON.stringify(data) : null,
        });

        // Check if the request was successful (status code in the range 200-299)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Parse and return the response JSON
        return await response.json();

    } catch (error) {
        // Handle any errors that occurred during the fetch
        console.error('Error during fetch:', error.message);
        throw error; // You can choose to handle or rethrow the error
    }
}
