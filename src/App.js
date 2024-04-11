// App.js
import './App.css';
import SongList from './songlist';

const songData = `
  Title: Like That Artist: Future, Metro Boomin, Kendrick Lamar Thumbnail: https://i.ytimg.com/vi/N9bKBAA22Go/sddefault.jpg?sqp=-oaymwEWCJADEOEBIAQqCghqEJQEGHgg6AJIWg&rs=AMzJL3kc7NbnjgF--SHxclSqOBDN7cThow
  Title: Beautiful Things Artist: Benson Boone Thumbnail: https://i.ytimg.com/vi/Oa_RSwwpPaA/sddefault.jpg?sqp=-oaymwEWCJADEOEBIAQqCghqEJQEGHgg6AJIWg&rs=AMzJL3kj7weGvq5NImArbJVbVuJPyh8z1A
  Title: Get It Sexyy Artist: Sexyy Red Thumbnail: https://lh3.googleusercontent.com/miU2jmXe9cVDOlwRma7aGOFp1YnfJm38m46GY_3Heevq6uhvY3r5XRZGcjrnmDLfXUeXgE9RF1K0qpCB=w120-h120-l90-rj
  Title: Lose Control (Live) Artist: Teddy Swims Thumbnail: https://i.ytimg.com/vi/GZ3zL7kT6_c/sddefault.jpg?sqp=-oaymwEWCJADEOEBIAQqCghqEJQEGHgg6AJIWg&rs=AMzJL3nf8NsTNMJ4SKern_OKdFGBMtfbKA
  Title: Finesse Artist: BossMan Dlow Thumbnail: https://i.ytimg.com/vi/KuxyPxY8ucc/sddefault.jpg?sqp=-oaymwEWCJADEOEBIAQqCghqEJQEGHgg6AJIWg&rs=AMzJL3lzbLkMSAeRebY1tJBQFYO2cbJhSQ
  Title: Yeah Glo! (Official Music Video) Artist: GloRilla Thumbnail: https://i.ytimg.com/vi/voT9hOs6FZc/sddefault.jpg?sqp=-oaymwEWCJADEOEBIAQqCghqEJQEGHgg6AJIWg&rs=AMzJL3lhwNeR1z-U1hNL8kWOm-zD70Dyyw
  Title: TEXAS HOLD 'EM (Official Lyric Video) Artist: Beyoncé Thumbnail: https://i.ytimg.com/vi/jCOX8dT9q8M/sddefault.jpg?sqp=-oaymwEWCJADEOEBIAQqCghqEJQEGHgg6AJIWg&rs=AMzJL3nFQykHWTJp5mMoFcx4zdkA2GQunw
  Title: Made For Me (Official Music Video) Artist: Muni Long Thumbnail: https://i.ytimg.com/vi/vYa3ak-3p60/sddefault.jpg?sqp=-oaymwEWCJADEOEBIAQqCghqEJQEGHgg6AJIWg&rs=AMzJL3mkltsL5gXgcVpXCWKGj70NNr0nOg
  Title: La Diabla Artist: Xavi Thumbnail: https://i.ytimg.com/vi/HfzbN5ky5Co/sddefault.jpg?sqp=-oaymwEWCJADEOEBIAQqCghqEJQEGHgg6AJIWg&rs=AMzJL3nFIkyIW2LcTHgPmihkIbHglxXplA
  Title: JOLENE Artist: Beyoncé Thumbnail: https://i.ytimg.com/vi/x9XHMK3nWr4/sddefault.jpg?sqp=-oaymwEWCJADEOEBIAQqCghqEJQEGHgg6AJIWg&rs=AMzJL3nI8XQzqskRciJgSBXpqHAgK9Hkqw
`;

function App() {
  const songs = songData
    .trim()
    .split('\n')
    .map((song) => {
      const [titleLine, artistLine, thumbnailLine] = song.trim().split('Artist:');
      const title = titleLine.replace('Title:', '').trim();
      const artist = artistLine.replace('Thumbnail:', '').trim();
      const thumbnail = thumbnailLine ? thumbnailLine.trim() : '';
      return { title, artist, thumbnail };
    });

  return (
    <div className="App">
      <header className="App-header">
        <h1>Song List</h1>
        <SongList songs={songs} />
      </header>
    </div>
  );
}

export default App;