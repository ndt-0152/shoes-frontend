export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

export enum HTTP_STATUS {
  OK = 200,
  CREATED = 201,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  PAYMENT_REQUIRED = 402,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  REQUEST_TIMEOUT = 408,
  CONFLICT = 409,
  INTERNAL_SERVER_ERROR = 500,
}

export enum COOKIE_KEYS {
  ACCESS_TOKEN = '_kingsport_access_token',
  REFRESH_TOKEN = '_kingsport_refresh_token',
}

export const supportedLanguage = [
  { language: 'vietnamese', code: 'vi' },
  { language: 'english', code: 'en' },
];

export const CONTACT_DEFAULT = '0123456789';
export const EMAIL_DEFAULT = 'ndt@gmail.com';

export const firebaseConfig = {
  apiKey: 'AIzaSyBJduXu4s1ss8tjXHTfd30zpfWxl7RX04Q',
  authDomain: 'shoes-images.firebaseapp.com',
  projectId: 'shoes-images',
  storageBucket: 'shoes-images.appspot.com',
  messagingSenderId: '958531585073',
  appId: '1:958531585073:web:742349f643e1062d778110',
  measurementId: 'G-554ZS8T4HE',
};

export const ITEMS_PER_PAGE = 9;
