//  OpenCage Geocoding API
const opencageApiKey = '47a267dc365b4216ae31739165dfdbf8';

const getLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);

        // Call function to get the address from coordinates
        getAddressFromCoordinates(latitude, longitude);
      },
      (error) => {
        console.error('Error retrieving location:', error);
        // Handle errors, e.g., show an error message to the user
      }
    );
  } else {
    console.error('Geolocation is not supported by this browser.');
    // Handle browsers that do not support Geolocation
  }
};

const getAddressFromCoordinates = async (latitude, longitude) => {
  try {
    const response = await fetch(
      `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${opencageApiKey}`
    );
    const data = await response.json();

    if (data.results && data.results.length > 0) {
      const address = data.results[0].formatted;
      console.log('Address:', address);

      // Update the input field with the address
      document.querySelector(
        '.input-group input[placeholder="Enter a City or Airport"]'
      ).value = address;
    } else {
      console.log('No results found');
    }
  } catch (error) {
    console.error('Error fetching address:', error);
  }
};

// Call this function when needed (e.g., when the page loads or when a button is clicked)
getLocation();
