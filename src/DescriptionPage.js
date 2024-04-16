import React from 'react';
import { findBestMatch } from 'string-similarity';
import './DescriptionPage.css';

function DescriptionPage({ youtube50Data, spotify50Data }) {
  const commonSongs = youtube50Data.filter(ytSong => {
    const bestMatch = findBestMatch(ytSong.title, spotify50Data.map(song => song.title));
    return bestMatch.bestMatch.rating >= 0.3; // Adjust the threshold as needed
  });

  const uniqueSpotifySongs = spotify50Data.filter(spotifySong => {
    const bestMatch = findBestMatch(spotifySong.title, youtube50Data.map(song => song.title));
    return bestMatch.bestMatch.rating < 0.3; // Adjust the threshold as needed
  });

  const uniqueYouTubeSongs = youtube50Data.filter(ytSong => {
    const bestMatch = findBestMatch(ytSong.title, spotify50Data.map(song => song.title));
    return bestMatch.bestMatch.rating < 0.3; // Adjust the threshold as needed
  });

  return (
    <div className="description-page">
      <h1>Comparison Page</h1>
      <div className="song-columns">
        <div className="column">
          <h2>Common Songs</h2>
          <ul className="song-list">
            {commonSongs.map((song, index) => (
              <li key={index} className="song-item">
                {song.thumbnail && (
                  <img src={song.thumbnail} alt={song.title} className="thumbnail" />
                )}
                {!song.thumbnail && (
                  <div className="thumbnail-placeholder">No Thumbnail</div>
                )}
                <div className="song-details">
                  <div className="song-title">{song.title}</div>
                  <div className="song-artist">{song.artist}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="column">
          <h2>Spotify Songs</h2>
          <ul className="song-list">
            {uniqueSpotifySongs.map((song, index) => (
              <li key={index} className="song-item">
                {song.thumbnail && (
                  <img src={song.thumbnail} alt={song.title} className="thumbnail" />
                )}
                {!song.thumbnail && (
                  <div className="thumbnail-placeholder">No Thumbnail</div>
                )}
                <div className="song-details">
                  <div className="song-title">{song.title}</div>
                  <div className="song-artist">{song.artist}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="column">
          <h2>YouTube Songs</h2>
          <ul className="song-list">
            {uniqueYouTubeSongs.map((song, index) => (
              <li key={index} className="song-item">
                {song.thumbnail && (
                  <img src={song.thumbnail} alt={song.title} className="thumbnail" />
                )}
                {!song.thumbnail && (
                  <div className="thumbnail-placeholder">No Thumbnail</div>
                )}
                <div className="song-details">
                  <div className="song-title">{song.title}</div>
                  <div className="song-artist">{song.artist}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p>
        Enjoy exploring the top songs and discovering new music!
      </p>
    </div>
  );
}

export default DescriptionPage;