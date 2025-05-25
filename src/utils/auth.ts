export function getTokenFromHash(): string | null {
    const hash = window.location.hash;
    const match = hash.match(/access_token=([^&]*)/);
    return match ? match[1] : null;
  }
  
  export function saveToken(token: string) {
    localStorage.setItem("spotify_access_token", token);
  }
  
  export function readToken(): string | null {
    return localStorage.getItem("spotify_access_token");
  }
  