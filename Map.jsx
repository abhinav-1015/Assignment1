import React, { Component } from 'react';
import {Map,GoogleApiWrapper,Marker,InfoWindow} from "google-maps-react";

const mapStyles={
    position:"absolute",
    width:"560px",
    height:"511px",
    margin:"130px"
}


export class MapContainer extends Component {
  state={
    showingInfoWindow:false,
    activeMarker:{},
    selectedPlace:{}
  };
  
  onMarkerClick=(props,marker,e)=>{
    this.setState({
      selectedPlace:props,
      activeMarker:marker,
      showingInfoWindow:true
    });

  };

  onClose=props=>{
    if(this.state.showingInfoWindow){
      this.setState({
        showingInfoWindow:false,
        activeMarker:null
      });
    }
  };

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={
          {
            lat: 28.6143,
            lng: 77.1994
          }
        }
      >
        <Marker
          onClick={this.onMarkerClick}
          name={"President Bhawan"}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>

        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAr56Dyw6eBipyOOwCgRQZj5CxjHtVKJ50'
})(MapContainer);