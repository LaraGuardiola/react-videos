import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {

    state = { videos: [], selectedVideo: null };

    onTermSubmit = async term => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        })

        this.setState({ videos: response.data.items})
    }

    onVideoSelect = video => {
        this.setState({ selectedVideo: video });
    }


    //pass onTermSubmit as a callback in the prop so each time form is submitted state is updated and videos rerendered
    //passing state as props to VideoList
    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList 
                    onVideoSelect={this.onVideoSelect} 
                    videos={this.state.videos}
                />
            </div>
        );
    }
}

export default App;     