import { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

const CLIENT_ID = "83c43115c3f64d5ab7a90c6edd40f9d8";
const REDIRECT_URI = "https://dancing-spotify-character.vercel.app/callback";

export default function Callback() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const code = searchParams.get("code");
    const verifier = localStorage.getItem("verifier");

    console.log("code from URL:", code);
    console.log("verifier from localStorage:", verifier);

    if (!code) {
      console.error("No code found in URL");
      return;
    }
    if (!verifier) {
      console.error("No verifier found in localStorage");
      return;
    }

    const getToken = async () => {
      const params = new URLSearchParams({
        client_id: CLIENT_ID,
        grant_type: "authorization_code",
        code,
        redirect_uri: REDIRECT_URI,
        code_verifier: verifier,
      });

      try {
        const response = await fetch("https://accounts.spotify.com/api/token", {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: params.toString(),
        });

        if (!response.ok) {
          const errData = await response.text();
          console.error("Token fetch failed:", errData);
          return;
        }

        const data = await response.json();
        console.log("Access token:", data.access_token);

        localStorage.setItem("spotify_access_token", data.access_token);
        navigate("/"); // Redirect to homepage or wherever
      } catch (err) {
        console.error("Token fetch failed", err);
      }
    };

    getToken();
  }, [searchParams, navigate]);

  return <p>Logging you in...</p>;
}
