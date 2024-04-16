// PreferenceTestPage.js
import React, { useState } from 'react';
import { findBestMatch } from 'string-similarity';
import './PreferenceTestPage.css';
import spotifyLogo from './spotify-logo.png'; // Import the Spotify logo image
import youtubeLogo from './youtube-logo.jpeg'; // Import the YouTube Music logo image

function PreferenceTestPage({ youtube50Data, spotify50Data }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedPlatform, setSelectedPlatform] = useState([]);

  const uniqueSpotifySongs = spotify50Data.filter(spotifySong => {
    const bestMatch = findBestMatch(spotifySong.title, youtube50Data.map(song => song.title));
    return bestMatch.bestMatch.rating < 0.3;
  });

  const uniqueYouTubeSongs = youtube50Data.filter(ytSong => {
    const bestMatch = findBestMatch(ytSong.title, spotify50Data.map(song => song.title));
    return bestMatch.bestMatch.rating < 0.3;
  });

  const handleSelection = (platform) => {
    setSelectedPlatform(prevPlatform => [...prevPlatform, platform]);
    setCurrentIndex(prevIndex => prevIndex + 1);
  };

  const renderSongCard = (song) => (
    <div className="song-card">
      {song.thumbnail && <img src={song.thumbnail} alt={song.title} className="thumbnail" />}
      {!song.thumbnail && <div className="thumbnail-placeholder">No Thumbnail</div>}
      <div className="song-details">
        <div className="song-title">{song.title}</div>
        <div className="song-artist">{song.artist}</div>
      </div>
    </div>
  );

  const getResult = () => {
    const youtubeCount = selectedPlatform.filter(platform => platform === 'YouTube').length;
    const spotifyCount = selectedPlatform.filter(platform => platform === 'Spotify').length;

    if (youtubeCount > spotifyCount) {
      return (
        <div className="result">
          <p>You are more of a YouTube Music user!</p>
          <img src={youtubeLogo} alt="YouTube Music" className="logo" />
        </div>
      );
    } else if (spotifyCount > youtubeCount) {
      return (
        <div className="result">
          <p>You are more of a Spotify user!</p>
          <img src={spotifyLogo} alt="Spotify" className="logo" />
        </div>
      );
    } else {
      return (
        <div className="result">
          <p>You have an equal preference for YouTube Music and Spotify!</p>
          <div className="logo-container">
            <img src={youtubeLogo} alt="YouTube Music" className="logo" />
            <img src={spotifyLogo} alt="Spotify" className="logo" />
          </div>
        </div>
      );
    }
  };

  if (currentIndex >= Math.min(uniqueYouTubeSongs.length, uniqueSpotifySongs.length)) {
    return (
      <div className="preference-test-page">
        <h1>Song Preference Test Result</h1>
        <p>{getResult()}</p>
      </div>
    );
  }

  const youtubeSong = uniqueYouTubeSongs[currentIndex];
  const spotifySong = uniqueSpotifySongs[currentIndex];

  return (
    <div className="preference-test-page">
      <h1>Song Preference Test</h1>
      <p>Select the song you prefer:</p>
      <div className="song-cards">
        <div className="song-card-container">
          {renderSongCard(youtubeSong)}
          <button onClick={() => handleSelection('YouTube')}>Select</button>
        </div>
        <div className="song-card-container">
          {renderSongCard(spotifySong)}
          <button onClick={() => handleSelection('Spotify')}>Select</button>
        </div>
      </div>
    </div>
  );
}

export default PreferenceTestPage;