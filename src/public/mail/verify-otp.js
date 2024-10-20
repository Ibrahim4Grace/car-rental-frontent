'use strict';

const baseURL =
  window.location.hostname === 'localhost'
    ? 'http://localhost:8000'
    : 'https://car-rental-backend-lhm2.onrender.com';

document.addEventListener('DOMContentLoaded', () => {
  const otpForm = document.getElementById('otp-form');

  const setButtonLoading = (button, isLoading) => {
    if (isLoading) {
      button.innerHTML =
        '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Verifying...';
      button.disabled = true;
    } else {
      button.innerHTML = 'Submit';
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
      const errorElement = document.getElementById(
        `${error.path.join('_')}Error`
      );
      if (errorElement) {
        errorElement.textContent = error.message;
      }
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const submitButton = document.getElementById('submitButton');
    setButtonLoading(submitButton, true);

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await axios.post(
        `${baseURL}/api/v1/auth/verify-otp`,
        data,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      const result = response.data;
      if (result.success) {
        alert(result.message);
        window.location.href = '/auth/login';
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
        alert('An error occurred while verifying the OTP: ' + error.message);
      }
    } finally {
      setButtonLoading(submitButton, false);
    }
  };

  otpForm.addEventListener('submit', handleFormSubmit);

  const inputFields = document.querySelectorAll('input');
  inputFields.forEach((inputField) => {
    inputField.addEventListener('input', () => {
      const errorElement = document.getElementById(`${inputField.name}Error`);
      if (errorElement) {
        errorElement.innerText = '';
      }

      const generalErrorElement = document.getElementById('generalError');
      if (generalErrorElement) {
        generalErrorElement.innerText = '';
      }
    });
  });
});
