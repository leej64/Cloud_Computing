from ytmusicapi import YTMusic
import requests
import json

ytmusic = YTMusic()

def get_playlist_details(playlist_id):
    playlist = ytmusic.get_playlist(playlist_id)
    return playlist

playlist_id = "PL4fGSI1pDJn6O1LS0XSdF3RyO0Rq_LDeI"
playlist_details = ytmusic.get_playlist(playlist_id)

#print(playlist_details)
with open('playlist.json', 'w', encoding="utf-8") as f:
    json.dump(playlist_details, f, indent="\t")


# def get_access_token(client_id, client_secret):
#     url = "https://accounts.spotify.com/api/token"
#     headers = {
#         "Content-Type": "application/x-www-form-urlencoded"
#     }
#     data = {
#         "grant_type": "client_credentials",
#         "client_id": client_id,
#         "client_secret": client_secret
#     }
#     response = requests.post(url, headers=headers, data=data)
#     return response.json()

# client_id = "db98993b545b463a966fa6ce524cbee8"
# client_secret = "cf4bc1b1beb64e11a0d45bd0576a2dc5"

# access_token_response = get_access_token(client_id, client_secret)
# print(access_token_response)

# access_token= 'BQBcW1s2BVgzO27sgqHyzTcwz8NKfvbwETdJVqo2XPZlZS95IKm7Pu2p6VUBrIk91jYCLI4FpFT8PLgr6PYpftdr4jPIBFUUcH0LXTZc7ZCuCSuMSJw'
# def get_spotify_playlist(playlist_id, access_token):
#     url = f"https://api.spotify.com/v1/playlists/{playlist_id}"
#     headers = {
#         "Authorization": f"Bearer {access_token}"
#     }
#     response = requests.get(url, headers=headers)
#     return response.json()

# playlist_id = "3cEYpjA9oz9GiPac4AsH4n"
# playlist_details = get_spotify_playlist(playlist_id, access_token)
# print(playlist_details)