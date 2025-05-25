export async function getNowPlaying(token: string) {
    const res = await fetch("https://api.spotify.com/v1/me/player/currently-playing", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  
    if (!res.ok) return null;
    return await res.json();
}  