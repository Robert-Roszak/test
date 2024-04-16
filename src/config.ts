export const API_URL = (process.env.NODE_ENV === 'production') ? 'https://lensshop-backend.vercel.app/api' : 'http://localhost:8000/api';
export const IMAGES_URL = (process.env.NODE_ENV === 'production') ? '/photos' : 'http://localhost:8000/photos';
