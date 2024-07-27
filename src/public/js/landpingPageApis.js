'strict';

document
  .getElementById('contactUsForm')
  .addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch(
        'https://car-rental-backend-lhm2.onrender.com/api/v1/contant-us-page',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();
      if (result.success) {
        alert('Message received successfully!');
      } else {
        alert('Error: ' + result.errors.map((err) => err.msg).join(', '));
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An unexpected error occurred. Please try again later.');
    }
  });
