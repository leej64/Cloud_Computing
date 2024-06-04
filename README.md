# Playlist Consolidation Between Music Streaming Services

# Description
<p>This project is a playlist consolidation between music streaming services with cloud computing technologies.<br>
The producer code running routinely through AWS Lambda and Eventbridge will get playlists from Youtube Music API and Spotify API. It will then process the data and store it into CouchDB database which is running on EC2 instance as a dockerized container.<br>
The frontend app, also running on EC2 instance, will fetch top playlist data from CouchDB and display them for contrast. The app also shows the testing page where users can test whether they are more like a spotify person, or a youtube music person.
</p>

The developers for this project are:
* Junwon Lee: [junwon.lee@vanderbilt.edu](mailto:junwon.lee@vanderbilt.edu)
* James Rogers: [james.rogers@vanderbilt.edu](mailto:james.rogers@vanderbilt.edu)
* Michael Wang: [michael.y.wang@vanderbilt.edu](mailto:michael.y.wang@vanderbilt.edu)

![Alt text](/poster/poster.jpg?raw=true "Playlist Consolidation Between Music Streaming Services")
