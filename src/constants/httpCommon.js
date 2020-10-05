import axios from 'axios';

export default axios.create({
  baseURL: 'https://car-booking-api-app.herokuapp.com',
  headers: {
    'Content-type': 'application/json',
    withCredentials: true,
  },
});
