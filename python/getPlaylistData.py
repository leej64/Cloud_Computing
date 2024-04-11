from ytmusicapi import YTMusic
import requests
import json

ytmusic = YTMusic()

def get_playlist_details(playlist_id):
    playlist = ytmusic.get_playlist(playlist_id)
    return playlist

playlist_id = "PL4fGSI1pDJn6O1LS0XSdF3RyO0Rq_LDeI"
playlist_details = ytmusic.get_playlist(playlist_id)

tracks = playlist_details['tracks'][:10]

youtube_data = []

for track in tracks:
    title = track['title']
    artist = ', '.join([artist['name'] for artist in track['artists']])
    thumbnail = track['thumbnails'][-1]['url']  # Assuming the last thumbnail is the highest quality
    youtube_data.append({'title':title, 'artist':artist, 'thumbnail':thumbnail})

#print(playlist_details)
with open('youtube.json', 'w', encoding="utf-8") as f:
    json.dump(youtube_data, f, indent="\t")


#spotify
def get_access_token(client_id, client_secret):
    url = "https://accounts.spotify.com/api/token"
    headers = {
        "Content-Type": "application/x-www-form-urlencoded"
    }
    data = {
        "grant_type": "client_credentials",
        "client_id": client_id,
        "client_secret": client_secret
    }
    response = requests.post(url, headers=headers, data=data)
    return response.json()

client_id = "db98993b545b463a966fa6ce524cbee8"
client_secret = "cf4bc1b1beb64e11a0d45bd0576a2dc5"

access_token_response = get_access_token(client_id, client_secret)
print(access_token_response)

access_token = access_token_response['access_token']
def get_spotify_playlist(playlist_id, access_token):
    url = f"https://api.spotify.com/v1/playlists/{playlist_id}"
    headers = {
        "Authorization": f"Bearer {access_token}"
    }
    response = requests.get(url, headers=headers)
    return response.json()

playlist_id = "37i9dQZEVXbLRQDuF5jeBp"
playlist_details = get_spotify_playlist(playlist_id, access_token)

tracks = playlist_details['tracks']['items'][:10]
spotify_data = []

for track in tracks:
    title = track['track']['name']
    artist = ', '.join([artist['name'] for artist in track['track']['album']['artists']])
    thumbnail = track['video_thumbnail']['url']  # Assuming the last thumbnail is the highest quality
    spotify_data.append({'title':title, 'artist':artist, 'thumbnail':thumbnail})


with open('spotify.json', 'w', encoding="utf-8") as f:
    json.dump(spotify_data, f, indent="\t")