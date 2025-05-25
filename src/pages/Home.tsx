import { useEffect, useState } from "react";
import { readToken } from "../utils/auth";
import { getNowPlaying } from "../utils/spotifyApi";
import Login from "../components/Login";

const Home = () => {
  const [song, setSong] = useState<any>(null);
  const token = readToken();

  useEffect(() => {
    const fetchData = async () => {
      if (token) {
        const data = await getNowPlaying(token);
        setSong(data);
      }
    };

    fetchData();
  }, [token]);

  if (!token) return <Login />;

  return (
    <div className="p-4">
      {song ? (
        <div>
          <h1 className="text-xl font-bold">Now Playing</h1>
          <p>{song.item.name} by {song.item.artists.map((a: any) => a.name).join(", ")}</p>
          <img src={song.item.album.images[0].url} alt="Album art" className="w-48 mt-2" />
        </div>
      ) : (
        <p>No music playing</p>
      )}
    </div>
  );
};

export default Home;