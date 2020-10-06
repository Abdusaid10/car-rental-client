import axios from 'axios';

export default axios.create({
  // http://localhost:3000
  // https://car-booking-api-app.herokuapp.com
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-type': 'application/json',
    withCredentials: true,
  },
});
