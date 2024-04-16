// App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import SongList from './songlist';
import DescriptionPage from './DescriptionPage';

function App() {
  const [ytMusicData, setYtMusicData] = useState([]);
  const [spotifyData, setSpotifyData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
	try {
	  // Fetch the most recent YouTube document from CouchDB
	  const youtubeResponse = await axios.get('http://54.152.198.46:5984/youtube/_all_docs?include_docs=true&descending=true&limit=1', {
		auth: {
		  username: 'admin',
		  password: 'group6'
		}
	  });
	  console.log('YouTube response:', youtubeResponse.data);
	  const youtubeDoc = youtubeResponse.data.rows[0].doc;
	  console.log('YouTube doc:', youtubeDoc);
	  const youtubeData = youtubeDoc.tracks;
	  console.log('YouTube data:', youtubeData);
	  setYtMusicData(youtubeData);
  
	  // Fetch the most recent Spotify document from CouchDB
	  const spotifyResponse = await axios.get('http://54.152.198.46:5984/spotify/_all_docs?include_docs=true&descending=true&limit=1', {
		auth: {
		  username: 'admin',
		  password: 'group6'
		}
	  });
	  console.log('Spotify response:', spotifyResponse.data);
	  const spotifyDoc = spotifyResponse.data.rows[0].doc;
	  console.log('Spotify doc:', spotifyDoc);
	  const spotifyData = spotifyDoc.tracks;
	  console.log('Spotify data:', spotifyData);
	  setSpotifyData(spotifyData);
	} catch (error) {
	  console.error('Error fetching data:', error);
	}
  };
 
  return (
    <Router>
      <div className="App">
        <nav className="toolbar">
          <ul>
            <li>
            <Link to="/description" className="toolbar-link">Welcome</Link>
              
            </li>
            <li>
            <Link to="/" className="toolbar-link">Top Lists</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={
            <header className="App-header">
              <h1>Song List</h1>
              <div className="song-list-container">
                <div className="song-list-column">
                  <h2>Spotify</h2>
                  <iframe style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/playlist/37i9dQZEVXbLp5XoPON0wI?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" ></iframe>
                  <h3>Top 10 on Spotify</h3>
                  <SongList songs={spotifyData} />
                </div>
                <div className="song-list-column">
                  <h2>YouTube Music</h2>
                  <iframe width="100%" height="352" src="https://www.youtube.com/embed/videoseries?list=PL4fGSI1pDJn6O1LS0XSdF3RyO0Rq_LDeI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" ></iframe>
                  <h3>Top 10 on YouTube</h3>
                  <SongList songs={ytMusicData} />
                </div>
              </div>
            </header>
          } />
          <Route path="/description" element={<DescriptionPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;