import React from "react";
import "./Playlist.css";
import TrackList from "../TrackList/TrackList";
//import "Tracklist";

export default class Playlist extends React.Component {
    render() {
        return(
            <div className="Playlist">
                <input defaultValue={'New Playlist'}/>
                <TrackList tracks={this.props.playlistTracks} />
                <button className="Playlist-save">SAVE TO SPOTIFY</button>
            </div>
        )
    }
}