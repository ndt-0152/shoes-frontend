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
