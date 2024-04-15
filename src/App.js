// App.js
import './App.css';
import SongList from './songlist';

const ytMusicData = [
	{
	  "title": "Karma",
	  "artist": "JoJo Siwa",
	  "thumbnail": "https://i.ytimg.com/vi/VZIm_2MgdeA/sddefault.jpg?sqp=-oaymwEWCJADEOEBIAQqCghqEJQEGHgg6AJIWg&rs=AMzJL3mE3KoZv0GIxREX7KcV8M3O259qLA"
	},
	{
	  "title": "Like That (feat. Kendrick Lamar)",
	  "artist": "Metro Boomin, Future",
	  "thumbnail": "https://i.ytimg.com/vi/y-FKd91YOys/sddefault.jpg?sqp=-oaymwEWCJADEOEBIAQqCghqEJQEGHgg6AJIWg&rs=AMzJL3mp-I9lyFy67y-58I3VzxotkBQpiw"
	},
	{
	  "title": "Wanna Be (Chopped And Screwed) (feat. Megan Thee Stallion)",
	  "artist": "GloRilla",
	  "thumbnail": "https://i.ytimg.com/vi/BT_83vSP1es/sddefault.jpg?sqp=-oaymwEWCJADEOEBIAQqCghqEJQEGHgg6AJIWg&rs=AMzJL3k268gnwO9r6Rj5kuF5Unq2HX1Tog"
	},
	{
	  "title": "Beautiful Things",
	  "artist": "Benson Boone",
	  "thumbnail": "https://i.ytimg.com/vi/Oa_RSwwpPaA/sddefault.jpg?sqp=-oaymwEWCJADEOEBIAQqCghqEJQEGHgg6AJIWg&rs=AMzJL3kj7weGvq5NImArbJVbVuJPyh8z1A"
	},
	{
	  "title": "Lose Control (Live)",
	  "artist": "Teddy Swims",
	  "thumbnail": "https://i.ytimg.com/vi/GZ3zL7kT6_c/sddefault.jpg?sqp=-oaymwEWCJADEOEBIAQqCghqEJQEGHgg6AJIWg&rs=AMzJL3nf8NsTNMJ4SKern_OKdFGBMtfbKA"
	},
	{
	  "title": "Get It Sexyy",
	  "artist": "Sexyy Red",
	  "thumbnail": "https://i.ytimg.com/vi/hUE6Haw_3zg/sddefault.jpg?sqp=-oaymwEWCJADEOEBIAQqCghqEJQEGHgg6AJIWg&rs=AMzJL3nYWCOa5HlO5pEMCOxtMLwPoNIM8A"
	},
	{
	  "title": "Yeah Glo! (Official Music Video)",
	  "artist": "GloRilla",
	  "thumbnail": "https://i.ytimg.com/vi/voT9hOs6FZc/sddefault.jpg?sqp=-oaymwEWCJADEOEBIAQqCghqEJQEGHgg6AJIWg&rs=AMzJL3lhwNeR1z-U1hNL8kWOm-zD70Dyyw"
	},
	{
	  "title": "Finesse",
	  "artist": "BossMan Dlow",
	  "thumbnail": "https://i.ytimg.com/vi/KuxyPxY8ucc/sddefault.jpg?sqp=-oaymwEWCJADEOEBIAQqCghqEJQEGHgg6AJIWg&rs=AMzJL3lzbLkMSAeRebY1tJBQFYO2cbJhSQ"
	},
	{
	  "title": "La Diabla",
	  "artist": "Xavi",
	  "thumbnail": "https://i.ytimg.com/vi/HfzbN5ky5Co/sddefault.jpg?sqp=-oaymwEWCJADEOEBIAQqCghqEJQEGHgg6AJIWg&rs=AMzJL3nFIkyIW2LcTHgPmihkIbHglxXplA"
	},
	{
	  "title": "Si No Quieres No",
	  "artist": "Luis R Conriquez, Neton Vega",
	  "thumbnail": "https://i.ytimg.com/vi/-V-sywKOCwQ/sddefault.jpg?sqp=-oaymwEWCJADEOEBIAQqCghqEJQEGHgg6AJIWg&rs=AMzJL3nyVTvZNHTIR3Ibx5tPlbPWBtm0ig"
	}
  ];

const spotifyData = [
	{
		"title": "Too Sweet",
		"artist": "Hozier",
		"thumbnail": "https://i.scdn.co/image/ab67616d0000b2732e8b4358d044b75807e30bf0"
	  },
	  {
		"title": "Like That",
		"artist": "Future, Metro Boomin",
		"thumbnail": "https://i.scdn.co/image/ab67616d0000b273a46b07c291e6dfdee13b3ee8"
	  },
	  {
		"title": "i like the way you kiss me",
		"artist": "Artemas",
		"thumbnail": "https://i.scdn.co/image/ab67616d0000b273e67611dbbf69a90d0b6cb738"
	  },
	  {
		"title": "CARNIVAL",
		"artist": "¥$, Kanye West, Ty Dolla $ign",
		"thumbnail": "https://i.scdn.co/image/ab67616d0000b2730a31b4026a452ae8c3f97a76"
	  },
	  {
		"title": "Beautiful Things",
		"artist": "Benson Boone",
		"thumbnail": "https://i.scdn.co/image/ab67616d0000b273cc04ff3e70e146ba9abacf40"
	  },
	  {
		"title": "Stick Season",
		"artist": "Noah Kahan",
		"thumbnail": "https://i.scdn.co/image/ab67616d0000b2736ee35072df1af802cca09918"
	  },
	  {
		"title": "Espresso",
		"artist": "Sabrina Carpenter",
		"thumbnail": "https://i.scdn.co/image/ab67616d0000b273659cd4673230913b3918e0d5"
	  },
	  {
		"title": "I Remember Everything (feat. Kacey Musgraves)",
		"artist": "Zach Bryan",
		"thumbnail": "https://i.scdn.co/image/ab67616d0000b273e5a25ed08d1e7e0fbb440cef"
	  },
	  {
		"title": "End of Beginning",
		"artist": "Djo",
		"thumbnail": "https://i.scdn.co/image/ab67616d0000b273fddfffec51b4580acae727c1"
	  },
	  {
		"title": "Type Shit",
		"artist": "Future, Metro Boomin",
		"thumbnail": "https://i.scdn.co/image/ab67616d0000b273a46b07c291e6dfdee13b3ee8"
	  }
	];


	function App() {
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
				  <h3>Top 10 on Spotify</h3>
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
				  <h3>Top 10 on YT</h3>
				  <SongList songs={ytMusicData} />
				</div>
			  </div>
			</header>
		  </div>
		);
	  }
	  
	  export default App;