export const register = (req, res) => {
  res.render('auth/register');
};

export const login = (req, res) => {
  res.render('auth/login');
};

export const forgetPassword = (req, res) => {
  res.render('auth/forgetPassword');
};

export const resetPassword = (req, res) => {
  res.render('auth/resetPassword');
};

// export const registerPage = asyncHandler(async (req, res) => {
//   try {
//   } catch (error) {}
// });
