import React from 'react';
import './DescriptionPage.css';

function DescriptionPage() {
  return (
    <div className="description-page">
      <h1>Description Page</h1>
      <p>
        Welcome to the Song List app! This app fetches the top 10 songs from both Spotify and YouTube Music using CouchDB as the backend database. It displays the song lists side by side, allowing you to compare the popular tracks on both platforms.
      </p>
      <p>
        The app uses React to build the user interface and axios to make HTTP requests to the CouchDB server. It fetches the most recent documents from the "spotify" and "youtube" databases and extracts the track information to display in the song lists.
      </p>
      <p>
        Enjoy exploring the top songs and discovering new music!
      </p>
    </div>
  );
}

export default DescriptionPage;