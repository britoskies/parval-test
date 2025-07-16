export const ITEMS_PER_PAGE = 10;
export const AVATAR_URL = "https://i.pravatar.cc/40";

export const API_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000/requests"
    : "https://6877eca1dba809d901f16af2.mockapi.io/requests";
