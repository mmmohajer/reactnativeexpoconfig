import {
  PRODUCTION as PROD,
  WITHOUT_DOCKER as WD,
  APP_DOMAIN as AD,
  API_BASE_URL_DEVELOPMENT,
  API_BASE_URL_PRODUCTION,
  STRIPE_PUBLISHABLE_API_KEY_DEVELOPMENT,
  STRIPE_PUBLISHABLE_API_KEY_PROD,
  GOOGLE_AUTH_CLIENT_ID_DEVELOPMENT,
  GOOGLE_AUTH_CLIENT_ID_PROD,
  MICROSOFT_AUTH_CLIENT_ID_DEVELOPMENT,
  MICROSOFT_AUTH_CLIENT_ID_PROD,
  FACEBOOK_AUTH_CLIENT_ID_DEVELOPMENT,
  FACEBOOK_AUTH_CLIENT_ID_PROD,
} from "Env";

export const PRODUCTION = PROD || 0;
export const WITHOUT_DOCKER = !PROD ? WD : 0;
export const API_BASE_URL = !PROD
  ? API_BASE_URL_DEVELOPMENT
  : API_BASE_URL_PRODUCTION;
export const STRIPE_PUBLISHABLE_API_KEY = !PROD
  ? STRIPE_PUBLISHABLE_API_KEY_DEVELOPMENT
  : STRIPE_PUBLISHABLE_API_KEY_PROD;
export const GOOGLE_AUTH_CLIENT_ID = !PROD
  ? GOOGLE_AUTH_CLIENT_ID_DEVELOPMENT
  : GOOGLE_AUTH_CLIENT_ID_PROD;
export const MICROSOFT_AUTH_CLIENT_ID = !PROD
  ? MICROSOFT_AUTH_CLIENT_ID_DEVELOPMENT
  : MICROSOFT_AUTH_CLIENT_ID_PROD;
export const FACEBOOK_AUTH_CLIENT_ID = !PROD
  ? FACEBOOK_AUTH_CLIENT_ID_DEVELOPMENT
  : FACEBOOK_AUTH_CLIENT_ID_PROD;