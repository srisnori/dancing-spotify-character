import React from "react";

const Login = () => {
  const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
  const redirectUri = import.meta.env.VITE_SPOTIFY_REDIRECT_URI;
  const scopes = [
    "user-read-playback-state",
    "user-read-currently-playing",
  ].join(" ");

  const handleLogin = () => {
    if (!clientId) {
      alert("Spotify client ID is missing!");
      return;
    }

    const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(
      redirectUri
    )}&scope=${encodeURIComponent(scopes)}&response_type=token&show_dialog=true`;

    window.location.href = authUrl;
  };

  return <button onClick={handleLogin}>Log in to Spotify</button>;
};

export default Login;