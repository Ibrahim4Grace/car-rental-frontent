export const register = (req, res) => {
  res.render('auth/register');
};

export const verifyOtp = (req, res) => {
  res.render('auth/verify-otp');
};

export const login = (req, res) => {
  res.render('auth/login');
};

export const forgetPassword = (req, res) => {
  res.render('auth/forget-password');
};

export const resetPassword = (req, res) => {
  res.render('auth/reset-password');
};

// export const registerPage = asyncHandler(async (req, res) => {
//   try {
//   } catch (error) {}
// });
