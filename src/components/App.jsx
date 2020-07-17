import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      videos: exampleVideoData,
      video: exampleVideoData[0],
      searchResult: ''
    };
    this.handleVideoChange = this.handleVideoChange.bind(this);
    this.handleSearchResult = this.handleSearchResult.bind(this);
  }
  handleVideoChange(video) {
    this.setState({
      video: video
    });
  }
  handleSearchResult(searched) {
    console.log('hello');
    this.setState({
      searchResult: searched
    });
  }
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em><Search searchResult={this.state.searchResult} function={this.handleSearchResult}/></em></h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5><em><VideoPlayer video={this.state.video} /></em></h5></div>
          </div>
          <div className="col-md-5">
            <div><h5><em><VideoList videos={this.state.videos} func={this.handleVideoChange}/></em></h5></div>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;




// var App = () => (
//   <div>
//     <nav className="navbar">
//       <div className="col-md-6 offset-md-3">
//         <div><h5><em>search</em> view goes here</h5></div>`
//       </div>
//     </nav>
//     <div className="row">
//       <div className="col-md-7">
//         <div><h5><em><VideoPlayer video={exampleVideoData[0]}/></em></h5></div>
//       </div>
//       <div className="col-md-5">
//         <div><h5><em><VideoList videos={exampleVideoData}/></em></h5></div>
//       </div>
//     </div>
//   </div>
// );
