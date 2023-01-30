window.onSpotifyIframeApiReady = (IFrameAPI) => {
    var element = document.getElementById('embed-iframe');
    var options = {
        width: '60%',
        height: '300',
        uri: 'spotify:episode:0qPtJThUzg7zRGz9JX6atj'
      };
    var callback = (EmbedController) => {
      document.querySelectorAll('ul#music-section > li > button').forEach(
        track => {
          track.addEventListener('click', () => {
            EmbedController.loadUri(track.dataset.spotifyId)
          });
        })
    };
    IFrameAPI.createController(element, options, callback);
  };