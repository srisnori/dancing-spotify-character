import { AUTH_ENDPOINT, CLIENT_ID, REDIRECT_URI, RESPONSE_TYPE, SCOPES } from "../lib/constants";

const Login = () => {
  const loginUrl = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPES}`;
  return (
    <a href={loginUrl}>
      <button className="px-4 py-2 bg-green-500 text-white rounded">
        Login with Spotify
      </button>
    </a>
  );
};

export default Login;