// App.js
import './App.css';
import SongList from './songlist';

const ytMusicData = `
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

const spotifyData = [
  {
		"title": "Too Sweet",
		"artist": "Hozier",
		"thumbnail": null
	},
	{
		"title": "Like That",
		"artist": "Future, Metro Boomin",
		"thumbnail": null
	},
	{
		"title": "i like the way you kiss me",
		"artist": "Artemas",
		"thumbnail": null
	},
	{
		"title": "CARNIVAL",
		"artist": "\u00a5$, Kanye West, Ty Dolla $ign",
		"thumbnail": null
	},
	{
		"title": "Beautiful Things",
		"artist": "Benson Boone",
		"thumbnail": null
	},
	{
		"title": "End of Beginning",
		"artist": "Djo",
		"thumbnail": null
	},
	{
		"title": "Type Shit",
		"artist": "Future, Metro Boomin",
		"thumbnail": null
	},
	{
		"title": "we can't be friends (wait for your love)",
		"artist": "Ariana Grande",
		"thumbnail": null
	},
	{
		"title": "I Remember Everything (feat. Kacey Musgraves)",
		"artist": "Zach Bryan",
		"thumbnail": null
	},
	{
		"title": "Stick Season",
		"artist": "Noah Kahan",
		"thumbnail": null
	}
];


function App() {
  const ytMusicSongs = ytMusicData
    .trim()
    .split('\n')
    .map((song) => {
      const [titleLine, artistLine] = song.trim().split('Artist:');
      const title = titleLine.replace('Title:', '').trim();
      const [artist, thumbnail] = artistLine.split('Thumbnail:').map((item) => item.trim());
      return { title, artist, thumbnail };
    });

	return (
		<div className="App">
		  <header className="App-header">
			<h1>Song List</h1>
			<div className="song-list-container">
			  <div className="song-list-column">
				<h2>Spotify</h2>
				<iframe
				  style={{ borderRadius: '12px' }}
				  src="https://open.spotify.com/embed/playlist/37i9dQZEVXbLp5XoPON0wI?utm_source=generator&theme=0"
				  width="100%"
				  height="352"
				  frameBorder="0"
				  allowFullScreen=""
				  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
				  loading="lazy"
				></iframe>
				<SongList songs={spotifyData} />
			  </div>
			  <div className="song-list-column">
				<h2>YT Music</h2>
				<iframe
				  width="100%"
				  height="352"
				  src="https://www.youtube.com/embed/videoseries?list=PL4fGSI1pDJn6O1LS0XSdF3RyO0Rq_LDeI"
				  title="YouTube video player"
				  frameBorder="0"
				  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				  allowFullScreen
				  referrerPolicy="strict-origin-when-cross-origin"
				></iframe>
				<SongList songs={ytMusicSongs} />
			  </div>
			</div>
		  </header>
		</div>
	  );
	}
		
export default App;