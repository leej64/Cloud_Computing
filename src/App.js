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
  const [youtube50Data, setYouTube50Data] = useState([]);
  const [spotify50Data, setSpotify50Data] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchYouTubeData = async () => {
    try {
      const response = await axios.get('http://54.152.198.46:5984/youtube/_all_docs?include_docs=true&descending=true&limit=1', {
        auth: {
          username: 'admin',
          password: 'group6'
        }
      });
      console.log('YouTube response:', response.data);
      const doc = response.data.rows[0].doc;
      console.log('YouTube doc:', doc);
      const data = doc.tracks;
      console.log('YouTube data:', data);
      return data;
    } catch (error) {
      console.error('Error fetching YouTube data:', error);
      return [];
    }
  };

  const fetchSpotifyData = async () => {
    try {
      const response = await axios.get('http://54.152.198.46:5984/spotify/_all_docs?include_docs=true&descending=true&limit=1', {
        auth: {
          username: 'admin',
          password: 'group6'
        }
      });
      console.log('Spotify response:', response.data);
      const doc = response.data.rows[0].doc;
      console.log('Spotify doc:', doc);
      const data = doc.tracks;
      console.log('Spotify data:', data);
      return data;
    } catch (error) {
      console.error('Error fetching Spotify data:', error);
      return [];
    }
  };

  const fetchYouTube50Data = async () => {
    try {
      const response = await axios.get('http://54.152.198.46:5984/youtube50/_all_docs?include_docs=true&descending=true&limit=1', {
        auth: {
          username: 'admin',
          password: 'group6'
        }
      });
      console.log('YouTube50 response:', response.data);
      const doc = response.data.rows[0].doc;
      console.log('YouTube50 doc:', doc);
      const data = doc.tracks;
      console.log('YouTube50 data:', data);
      return data;
    } catch (error) {
      console.error('Error fetching YouTube50 data:', error);
      return [];
    }
  };

  const fetchSpotify50Data = async () => {
    try {
      const response = await axios.get('http://54.152.198.46:5984/spotify50/_all_docs?include_docs=true&descending=true&limit=1', {
        auth: {
          username: 'admin',
          password: 'group6'
        }
      });
      console.log('Spotify50 response:', response.data);
      const doc = response.data.rows[0].doc;
      console.log('Spotify50 doc:', doc);
      const data = doc.tracks;
      console.log('Spotify50 data:', data);
      return data;
    } catch (error) {
      console.error('Error fetching Spotify50 data:', error);
      return [];
    }
  };

  const fetchData = async () => {
    try {
      const [ytMusicData, spotifyData, youtube50Data, spotify50Data] = await Promise.all([
        fetchYouTubeData(),
        fetchSpotifyData(),
        fetchYouTube50Data(),
        fetchSpotify50Data()
      ]);
      setYtMusicData(ytMusicData);
      setSpotifyData(spotifyData);
      setYouTube50Data(youtube50Data);
      setSpotify50Data(spotify50Data);
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
            <Link to="/" className="toolbar-link">Top Lists</Link>
              
            </li>
            <li>
            <Link to="/description" className="toolbar-link">Comparison</Link> 
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
          <Route path="/description" element={<DescriptionPage ytMusicData={ytMusicData} spotifyData={spotifyData} youtube50Data={youtube50Data} spotify50Data={spotify50Data} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;