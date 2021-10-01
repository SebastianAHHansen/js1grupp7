
class Song {
    constructor(artist, songName, duration) {
        this.artist = artist;
        this.songName = songName;
        this.duration = duration;
    }
    
}

const playList = [];

playList.push(new Song('Britta', 'One more time', 3.23));

console.log(playList);