export interface ROUTES_DATA {
  HOME: string;
  CONTACT_US: string;
  ABOUT: string;
  LOGIN: string;
  CLIENTS: string;
  APPLE: string;
  GOOGLE: string;
  FACEBOOK: string;
  NOT_FOUND: string;
}
export const ROUTES: ROUTES_DATA = {
  HOME: "/",
  CONTACT_US: "/contactUs",
  ABOUT: "/about",
  LOGIN: "/login",
  CLIENTS: "/clients",
  APPLE: "/clients/apple",
  GOOGLE: "/clients/facebook",
  FACEBOOK: "/clients/google",
  NOT_FOUND: "*",
};
export enum NAVIGATION_MENU_ROUTES {
  Home = "/",
  Clients = "/clients",
  "Contact Us" = "/contactUs",
  About = "/about",
  Login = "/login",
}
