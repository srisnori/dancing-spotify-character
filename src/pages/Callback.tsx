import { useEffect } from "react";
import { getTokenFromHash, saveToken } from "../utils/auth";
import { useNavigate } from "react-router-dom";

const Callback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = getTokenFromHash();
    if (token) {
      saveToken(token);
      navigate("/"); // go to home
    }
  }, []);

  return <p>Logging you in...</p>;
};

export default Callback;