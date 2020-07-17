var searchYouTube = (options, callback) => {
  $.ajax({
    method: "GET",
    url: "https://www.googleapis.com/youtube/v3/search",
    context: document.body,
    success : (data)  => {
      console.log('data', data);
    }
  });
};

export default searchYouTube;
