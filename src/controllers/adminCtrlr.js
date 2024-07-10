export const adminPage = (req, res) => {
  res.render('admin/index');
};

export const carListPage = (req, res) => {
  res.render('admin/carList');
};

export const carDetailsPage = (req, res) => {
  res.render('admin/carDetails');
};

export const reservationsPage = (req, res) => {
  res.render('admin/reservations');
};

export const rentedcarsPage = (req, res) => {
  res.render('admin/rentedcars');
};

export const maintenanceCarsPage = (req, res) => {
  res.render('admin/maintenance-cars');
};

export const newBookingsPage = (req, res) => {
  res.render('admin/new-bookings');
};

export const usersPage = (req, res) => {
  res.render('admin/users');
};
