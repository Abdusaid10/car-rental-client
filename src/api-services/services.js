import http from '../constants/httpCommon';

export const getCars = () => http.get('/cars');
export const getCar = id => http.get(`/cars/${id}`);

export const getCategories = () => http.get('/categories');

export const getManufacturers = () => http.get('/manufacturers');

export const getBookings = () => http.get('/bookings');

export const addCar = car => http.post('/cars', car);

export const addCategory = category => http.post('/categories', category);

export const addManufacturer = manufacturer => http.post('/manufacturers', manufacturer);

export const signup = user => http.post('/signup', user);

export const login = user => http.post('/login', user);

export const loggedIn = () => http.get('/logged_in');

export const logout = () => http.get('/logout');
