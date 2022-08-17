import axios from 'axios';

export default axios.create({
  baseURL:
    'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAX_-UlxB-sJ_mxkb0uDQrEcVdIosahBKg',
 
  // params: {
  //   key: 'AIzaSyAX_-UlxB-sJ_mxkb0uDQrEcVdIosahBKg',
  // },
});