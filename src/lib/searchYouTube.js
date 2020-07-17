
var searchYouTube = (options, callback) => {
  $.ajax({
    method: "GET",
    url: "https://www.googleapis.com/youtube/v3/search",
    // context: document.body,
    part: 'snippet',
    key: options.key,
    q: options.query,
    maxResults: options.max || 5,
    type: 'video',
    videoEmbeddable: 'true',
    success : (data)  => {
      callback(data);
      console.log('data', data);
    },
    error: (status) => {
      console.error('chatterbox: Failed to fetch messages', status);
    }
  });
};

export default searchYouTube;
