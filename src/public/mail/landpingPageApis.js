'use strict';
document
  .getElementById('contactUsForm')
  .addEventListener('submit', async (event) => {
    event.preventDefault();

    const submitButton = document.getElementById('thankYouMessage');
    submitButton.innerHTML =
      '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Submitting...';
    submitButton.disabled = true;

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await axios.post(
        'https://car-rental-backend-lhm2.onrender.com/api/v1/contact-us-page',
        data,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      const result = response.data;
      if (result.success) {
        document.getElementById('contactUsForm').reset();
        document.getElementById('contactUsForm').style.display = 'none';
        document.getElementById('thankYouMessage').style.display = 'block';
      } else {
        document
          .querySelectorAll('.error-message')
          .forEach((el) => (el.textContent = ''));

        result.errors.forEach((error) => {
          const errorElement = document.getElementById(`${error.key}Error`);
          if (errorElement) {
            errorElement.textContent = error.msg;
          }
        });
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.errors) {
        document
          .querySelectorAll('.error-message')
          .forEach((el) => (el.textContent = ''));

        error.response.data.errors.forEach((error) => {
          const errorElement = document.getElementById(`${error.key}Error`);
          if (errorElement) {
            errorElement.textContent = error.msg;
          }
        });
      } else {
        alert(
          'An error occurred while processing your request: ' + error.message
        );
      }
    } finally {
      submitButton.innerHTML = 'Submit';
      submitButton.disabled = false;
    }
  });
