// SongList.js
import React from 'react';

const SongList = ({ songs }) => {
  return (
    <div className="song-list">
      {songs.map((song, index) => (
        <div key={index} className="song-item">
          <img src={song.thumbnail} alt={`${song.title} thumbnail`} className="thumbnail" />
          <div className="song-details">
            <h3 className="song-title">{song.title}</h3>
            <p className="song-artist">{song.artist}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SongList;