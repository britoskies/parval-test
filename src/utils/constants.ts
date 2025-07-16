export const ITEMS_PER_PAGE = 10;
export const AVATAR_URL = "https://i.pravatar.cc/40";

const host = window.location.hostname;
export const API_URL = host === 'localhost' || host === '127.0.0.1'
  ? 'http://localhost:3000/requests'
  : 'https://parvaltest.netlify.app/.netlify/functions/api';