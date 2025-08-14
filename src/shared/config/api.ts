const isDevelopment =
  window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';

export const API_BASE_URL = isDevelopment ? '/api' : 'https://dummyjson.com';
