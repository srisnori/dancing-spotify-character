import { generateCodeVerifier, generateCodeChallenge } from "../utils/pkce";

const CLIENT_ID = "83c43115c3f64d5ab7a90c6edd40f9d8";
const REDIRECT_URI = "https://dancing-spotify-character.vercel.app/callback";
const SCOPE = "user-read-playback-state user-read-currently-playing";

export default function Login() {
  const handleLogin = async () => {
    const verifier = generateCodeVerifier();
    localStorage.setItem("verifier", verifier); 
    console.log("Verifier saved:", verifier);

    const challenge = await generateCodeChallenge(verifier);

    const params = new URLSearchParams({
      client_id: CLIENT_ID,
      response_type: "code",
      redirect_uri: REDIRECT_URI,
      code_challenge_method: "S256",
      code_challenge: challenge,
      scope: SCOPE,
    });

    window.location.href = `https://accounts.spotify.com/authorize?${params.toString()}`;
  };

  return <button onClick={handleLogin}>Login with Spotify</button>;
}
