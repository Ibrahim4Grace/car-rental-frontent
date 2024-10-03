export const adminPage = (req, res) => {
  res.render('admin/index');
};

export const carListPage = (req, res) => {
  res.render('admin/car-list');
};

export const carDetailsPage = (req, res) => {
  res.render('admin/car-details');
};

export const reservationsPage = (req, res) => {
  res.render('admin/reservations');
};

export const reservationsdeatailsPage = (req, res) => {
  res.render('admin/reservation-details');
};

export const reservationsAcceptPage = (req, res) => {
  res.render('admin/accept-reservation');
};

export const reservationsRejectPage = (req, res) => {
  res.render('admin/reject-reservation');
};

export const rentedcarsPage = (req, res) => {
  res.render('admin/rented-cars');
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
