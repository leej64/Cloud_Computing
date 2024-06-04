# Playlist Consolidation Between Music Streaming Services
An iOS app that helps members of the Vanderbilt Climbing Club organize rides to and from biweekly practices.

# Description
<p>This project is a playlist consolidation between music streaming services with cloud computing technologies.<br>
The producer code running routinely through AWS Lambda and Eventbridge will get playlists from Youtube Music API and Spotify API.<br>
Consumer code running on EC2 instance will recieve streamed data from Kafka pipeline, then process and store top playlist data for both music streaming services in CouchDB which is also running on EC2 instance as a dockerized container.<br>
The frontend app will fetch top playlist data from CouchDB and display them for contrast. The app also shows the testing page where users can test whether they are more like a spotify person, or a youtube music person.
</p>

The developers for this project are:
* Junwon Lee: [junwon.lee@vanderbilt.edu](mailto:junwon.lee@vanderbilt.edu)
* James Rogers: [james.rogers@vanderbilt.edu](mailto:james.rogers@vanderbilt.edu)
* Michael Wang: [michael.y.wang@vanderbilt.edu](mailto:michael.y.wang@vanderbilt.edu)
