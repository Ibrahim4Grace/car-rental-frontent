'use strict';

const baseURL =
  window.location.hostname === 'localhost'
    ? 'http://localhost:3000'
    : 'https://car-rental-backend-lhm2.onrender.com';

document.addEventListener('DOMContentLoaded', () => {
  const registrationForm = document.getElementById('registration');

  const setButtonLoading = (button, isLoading) => {
    if (isLoading) {
      button.innerHTML =
        '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Submitting...';
      button.disabled = true;
    } else {
      button.innerHTML = 'Register';
      button.disabled = false;
    }
  };

  const clearPreviousErrors = () => {
    document
      .querySelectorAll('.error-message')
      .forEach((el) => (el.textContent = ''));
  };

  const displayValidationErrors = (errors) => {
    errors.forEach((error) => {
      const errorElement = document.getElementById(`${error.key}Error`);
      if (errorElement) {
        errorElement.textContent = error.msg;
      }
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const submitButton = document.querySelector(
      '#registration .button[type="submit"]'
    );
    setButtonLoading(submitButton, true);

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await axios.post(
        `${baseURL}/api/v1/auth/register`,
        data,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      const result = response.data;
      console.log(result); // Debugging line
      if (result.message) {
        alert(result.message);
        window.location.href = '/auth/verify-otp';
      } else {
        clearPreviousErrors();
        if (result.errors && result.errors.length > 0) {
          displayValidationErrors(result.errors);
        }
      }
    } catch (error) {
      clearPreviousErrors();
      if (error.response && error.response.data && error.response.data.errors) {
        if (error.response.data.errors.length > 0) {
          displayValidationErrors(error.response.data.errors);
        }
      } else {
        alert(
          'An error occurred while processing your request: ' + error.message
        );
      }
    } finally {
      setButtonLoading(submitButton, false);
    }
  };

  registrationForm.addEventListener('submit', handleFormSubmit);
});
