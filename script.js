
// Testdata

const playlistTest = [];
playlistTest.push(new Song('Britta', 'One more time', 'pop'));
playlistTest.push(new Song('Hazelnut hobo', 'Covfef', 'rock'));
playlistTest.push(new Song('Dagge', 'Greedy thief', 'country'));
playlistTest.push(new Song('Locomotive Lars', 'chucka cho', 'alternative'));
playlistTest.push(new Song('Helms deep', 'into the mountain', 'indie'));
playlistTest.push(new Song('Abracadabra', 'pick a card', 'pop'));


//MELI: class Song to create new objects
class Song {
    constructor(artist, song, genre) {
      this.artist = artist;
      this.song = song;
      this.genre = genre;
    }
  }
  
 const playList = [];

  //MELI: Function to activate the script at the click of the button
  addPlaylist.addEventListener("click", function newSong() {
    //Collecting values from the input fields
    let artist = document.getElementById("enterArtist").value;
    let song = document.getElementById("enterSong").value;
    let genre = document.getElementById("enterGenre").value;
  
    //Displays error message if all input fields haven't been entered
    if (artist == "" || song == "" || genre == "") {
      output.innerHTML = "You have to enter all information";
    } else if (artist != "" && song != "" && genre != "") {
      output.innerHTML = "You have saved a track to your playlist. Save as many as you like!";
    }
  
    //Pushes in song into array if all input fields have been entered
    if (artist != "" && song != "" && genre != "") {
      playList.push(new Song(artist, song, genre));
      console.log(playList);
    }
  });
  
  //MELI: Cleans text output with click of a button
  cleanInput.addEventListener("click", function cleanInput() {
    document.getElementById("enterArtist").value = "";
    document.getElementById("enterSong").value = "";
    document.getElementById("enterGenre").value = "";
  });
  
  //MELI: Cleans text input with click of a button
  cleanOutput.addEventListener("click", function cleanOutput() {
    document.getElementById("output").innerHTML = "";
  });
