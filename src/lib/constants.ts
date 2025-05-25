export const CLIENT_ID = "83c43115c3f64d5ab7a90c6edd40f9d8";
export const REDIRECT_URI = "https://dancing-spotify-character.vercel.app/callback";
export const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
export const RESPONSE_TYPE = "token";
export const SCOPES = [
  "user-read-playback-state",
  "user-read-currently-playing",
].join(" ");
