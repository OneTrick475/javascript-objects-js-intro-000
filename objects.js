var playlist = {name: 'song'};



function removeFromPlaylist(playlist, artistName){
  delete playlist.artistName;
  return playlist;
}
