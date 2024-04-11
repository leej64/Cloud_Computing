import json

with open('playlist.json') as file:
    data = json.load(file)

tracks = data['tracks'][:10]

for track in tracks:
    title = track['title']
    artist = ', '.join([artist['name'] for artist in track['artists']])
    thumbnail = track['thumbnails'][-1]['url']  # Assuming the last thumbnail is the highest quality

    print(f"Title: {title}")
    print(f"Artist: {artist}")
    print(f"Thumbnail: {thumbnail}")
    print()