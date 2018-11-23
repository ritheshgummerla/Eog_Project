import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../store/actions";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import _ from "lodash";
import LinearProgress from "@material-ui/core/LinearProgress";
import "../app.css";

class MapComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    };
  }

  componentDidMount = () => {
    this.props.onMetricDataLoad();
  };

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  };

  render() {
    if (!this.props.data.data) {
      return (
        <div className="loader">
          <LinearProgress />
        </div>
      );
    }
    const data = this.props.data.data;
    const mapData = data[data.length - 1];
    let mdata= mapData.metric.toString()
    mdata=mdata.slice(0,5)
    const currentLocation = {
      lat: mapData.latitude,
      lng: mapData.longitude,
      temp: `${mdata}°c`
    };
    return (
      <div className="loader">
        <Map
          google={this.props.google}
          zoom={5}
          style={{ width: "50%", height: "50%" }}
          initialCenter={currentLocation}
        >
          <Marker
            onClick={this.onMarkerClick}
            position={currentLocation}
            name={
              <div className="markar">
                <p>
                  {/* Latitude : {currentLocation.lat}
                  <br />
                  Longitutde : {currentLocation.lng}
                  <br /> */}
                  Temperature : {currentLocation.temp}
                </p>
              </div>
            }
          />
          <InfoWindow
            onClose={this.onInfoWindowClose}
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
          >
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

const mapDispatch = dispatch => ({
  onMetricDataLoad: () =>
    dispatch({
      type: actions.FETCH_METRICDATA
    })
});

const mapStateTOProps = state => ({
  data: state.metric.data
});

export default connect(
  mapStateTOProps,
  mapDispatch
)(
  GoogleApiWrapper({
    apiKey: "AIzaSyC3Y88mbMIsf4idhcqDCRAwMW17wb5mUcw"
  })(MapComponent)
);
