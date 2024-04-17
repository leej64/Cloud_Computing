# Author: Junwon Lee
# Vanderbilt University
#
# For CS 4287 Project data producer code

import json
from ytmusicapi import YTMusic
import requests
import couchdb

def main():
    #youtube
    ytmusic = YTMusic()

    def get_playlist_details(playlist_id):
        playlist = ytmusic.get_playlist(playlist_id)
        return playlist
    
    playlist_id = "PL4fGSI1pDJn6O1LS0XSdF3RyO0Rq_LDeI"
    playlist_details_youtube = ytmusic.get_playlist(playlist_id)
    
    tracks = playlist_details_youtube['tracks'][:50]
    
    youtube_data = []
    
    for track in tracks:
        title = track['title']
        artist = ', '.join([artist['name'] for artist in track['artists']])
        thumbnail = track['thumbnails'][-1]['url']
        youtube_data.append({'title':title, 'artist':artist, 'thumbnail':thumbnail})
    
    
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
    playlist_details_spotify = get_spotify_playlist(playlist_id, access_token)
    
    tracks = playlist_details_spotify['tracks']['items'][:50]
    spotify_data = []
    
    for track in tracks:
        title = track['track']['name']
        artist = ', '.join([artist['name'] for artist in track['track']['album']['artists']])
        thumbnail = track['track']['album']['images'][0]['url']
        spotify_data.append({'title':title, 'artist':artist, 'thumbnail':thumbnail})
    
    #couchdb
    user = "admin"
    password = "group6"
    couchserver = couchdb.Server("http://%s:%s@54.152.198.46:5984/" %(user, password))
    
    def bind_db(dbname):
        if dbname in couchserver:
            db = couchserver[dbname]
        else:
            db = couchserver.create(dbname)
        return db
    
    youtube_db = bind_db("youtube")
    spotify_db = bind_db("spotify")
    youtube_50_db = bind_db("youtube50")
    spotify_50_db = bind_db("spotify50")
    
    youtube_data_10 = {'tracks':youtube_data[:10]}
    spotify_data_10 = {'tracks':spotify_data[:10]}
    youtube_data_50 = {'tracks':youtube_data}
    spotify_data_50 = {'tracks':spotify_data}
    
    youtube_json_10 = json.dumps(youtube_data_10)
    spotify_json_10 = json.dumps(spotify_data_10)
    youtube_json_50 = json.dumps(youtube_data_50)
    spotify_json_50 = json.dumps(spotify_data_50)
    
    youtube_db.save(youtube_json_10, headers = {'Content-type':'application/json'})
    spotify_db.save(spotify_json_10, headers = {'Content-type':'application/json'})
    youtube_50_db.save(youtube_json_50, headers = {'Content-type':'application/json'})
    spotify_50_db.save(spotify_json_50, headers = {'Content-type':'application/json'})

def lambda_handler(event, context):
    main()
    return {
        'statusCode': 200,
        'body': json.dumps('Hello from Lambda!')
    }