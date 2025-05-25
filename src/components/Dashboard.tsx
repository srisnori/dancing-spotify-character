import { useEffect, useState } from 'react';

const Dashboard = () => {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const accessToken = localStorage.getItem('spotifyAuthToken');
    setToken(accessToken);
  }, []);

  if (!token) {
    return <div>Not logged in.</div>;
  }

  return (
    <div>
      <h1>Welcome to the Dashboard!</h1>
      <div className="dancing-circle"></div>
    </div>
  );
};

export default Dashboard;