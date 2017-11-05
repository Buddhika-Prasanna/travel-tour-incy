/* eslint-disable no-undef */

import React, { Component } from 'react'

import canUseDOM from "can-use-dom";
import raf from "raf";
import {withGoogleMap, GoogleMap, Marker,} from "react-google-maps";
import SearchBox from "../../node_modules/react-google-maps/lib/places/SearchBox";

const INPUT_STYLE = {
    boxSizing: `border-box`,
    MozBoxSizing: `border-box`,
    border: `1px solid transparent`,
    width: `240px`,
    height: `32px`,
    marginTop: `27px`,
    padding: `0 12px`,
    borderRadius: `1px`,
    boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
    fontSize: `14px`,
    outline: `none`,
    textOverflow: `ellipses`,
};

const geolocation = (
    canUseDOM && navigator.geolocation ?
        navigator.geolocation :
        ({
            getCurrentPosition(success, failure) {
                failure(`Your browser doesn't support geolocation.`);
            },
        })
);

const GeolocationGoogleMap = withGoogleMap(props => (
    <GoogleMap
        ref={props.onMapLoad}
        defaultZoom={18}
        center={props.center}
        onClick={props.onMapClick}
        defaultCenter={props.center}
        onBoundsChanged={props.onBoundsChanged} >
        {props.markers.map(marker => (
            <Marker
                {...marker}
                onRightClick={() => props.onMarkerRightClick(marker)}
            />
        ))}
        <SearchBox
            ref={props.onSearchBoxMounted}
            bounds={props.bounds}
            controlPosition={google.maps.ControlPosition.TOP_LEFT}
            onPlacesChanged={props.onPlacesChanged}
            inputPlaceholder="Search places"
            inputStyle={INPUT_STYLE}
        />
    </GoogleMap>
));

export default class GeoMap extends Component {
    state = {
        center: null,
        content: null,
        radius: 2000,
        markers: [],
        bounds: null,
        position : null,
        address: null,
    };

    isUnmounted = false;
    handleMapMount = this.componentDidMount.bind(this);
    handleMapLoad = this.handleMapLoad.bind(this);
    handleMapClick = this.handleMapClick.bind(this);
    handleMarkerRightClick = this.handleMarkerRightClick.bind(this);
    handleBoundsChanged = this.handleBoundsChanged.bind(this);
    handleSearchBoxMounted = this.handleSearchBoxMounted.bind(this);
    handlePlacesChanged = this.handlePlacesChanged.bind(this);

    handleMapLoad(map) {
        this._mapComponent = map;
    }

    handleBoundsChanged() {
        // console.log(this._mapComponent)
        this.setState({
            bounds: this._mapComponent.getBounds(),
            center: this._mapComponent.getCenter(),
        });
    }

    handleSearchBoxMounted(searchBox) {
        this._searchBox = searchBox;
    }

    handlePlacesChanged() {
        const places = this._searchBox.getPlaces();

        // Add a marker for each place returned from search bar
        const markers = places.map(place => ({
            position: place.geometry.location,
        }));

        // Set markers; set map center to first search result
        const mapCenter = markers.length > 0 ? markers[0].position : this.state.center;

        this.setState({
            center: mapCenter,
            markers,
        });

        this.handleLocation(this.state.markers);
    }

    /*
     * This is called when you click on the map.
     */
    handleMapClick(event) {
        const nextMarkers = [
            {
                position: event.latLng,
                defaultAnimation: 1,
                key: Date.now(), // Add a key property for: http://fb.me/react-warning-keys
            },
        ];

        this.setState({
            markers: nextMarkers,
        });

        this.handleLocation(this.state.markers);
    }

    handleLocation(arrPosition){
        var position = arrPosition.length === 0 ? this.state.center : arrPosition[arrPosition.length-1]['position'];

        this.handleAddress(position)

        this.setState({
            position: position
        });

        this.props.onUpdateLocation(this.state.position);
    }

    handleAddress(latLng) {
        var geocoder = new google.maps.Geocoder();
        const setState = this.setState.bind(this);
        const onUpdateAddress = this.props.onUpdateAddress.bind(this);

        geocoder.geocode({'location': latLng}, function(results, status) {
            if (status === 'OK') {
                if (results[1]) {
                    setState ({
                        address : results[1].formatted_address
                    });
                    onUpdateAddress(results[1].formatted_address);
                } else {
                    console.log('No results found');
                }
            } else {
                console.log('Geocoder failed due to: ' + status);
            }
        });
    }

    handleMarkerRightClick(targetMarker) {
        /*
         * All you modify is data, and the view is driven by data.
         * This is so called data-driven-development. (And yes, it's now in
         * web front end and even with google maps API.)
         */
        const nextMarkers = this.state.markers.filter(marker => marker !== targetMarker);
        this.setState({
            markers: nextMarkers,
        });

        this.handleLocation(this.state.markers);
    }

    componentDidMount() {
        const tick = () => {
            if (this.isUnmounted) {
                return;
            }
            this.setState({ radius: Math.max(this.state.radius - 20, 0) });

            if (this.state.radius > 200) {
                raf(tick);
            }
        };

        const defLat = 6.911601069301282;
        const defLng = 79.84968289732933;

        this.setState({
            position: {lat: defLat, lng: defLng}
        });

        var latLng = new google.maps.LatLng(defLat, defLng);

        this.props.onUpdateLocation(latLng);

        if (this.isUnmounted) {
            return;
        }

        this.setState({
            markers: [{
                position: latLng,
                defaultAnimation: 1,
                key: Date.now(), // Add a key property for: http://fb.me/react-warning-keys
            }],
            center: {
                lat: defLat,
                lng: defLng,
            },
        });

        this.handleAddress({
            lat: defLat,
            lng: defLng,
        });

        // geolocation.getCurrentPosition((position) => {
        //   this.setState({
        //     position: {lat: position.coords.latitude, lng: position.coords.longitude}
        //   });
        //
        //   var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        //
        //   this.props.onUpdateLocation(latLng);
        //
        //   if (this.isUnmounted) {
        //     return;
        //   }
        //
        //   this.setState({
        //     markers: [{
        //       position: latLng,
        //       defaultAnimation: 1,
        //       key: Date.now(), // Add a key property for: http://fb.me/react-warning-keys
        //     }],
        //     center: {
        //       lat: position.coords.latitude,
        //       lng: position.coords.longitude,
        //     },
        //   });
        //
        //   this.handleAddress(this.state.center);
        //   raf(tick);
        //
        // }, (reason) => {
        //   if (this.isUnmounted) {
        //     return;
        //   }
        //
        //   this.setState({
        //     center: {
        //       lat: 60,
        //       lng: 105,
        //     },
        //     content: `Error: The Geolocation service failed (${reason}).`,
        //   });
        // });
    }

    componentWillUnmount() {
        this.isUnmounted = true;
    }

    render() {
        return (
            <div style={{width: '100%', height: '100%', position:'absolute'}}>
                <GeolocationGoogleMap
                    containerElement={
                        <div style={{ height: '100%' }} />
                    }
                    mapElement={
                        <div style={{ height: '100%' }} />
                    }

                    center={this.state.center}
                    content={this.state.content}
                    radius={this.state.radius}

                    onMapMounted={this.handleMapMount}

                    onMapLoad={this.handleMapLoad}
                    onMapClick={this.handleMapClick}
                    markers={this.state.markers}
                    onMarkerRightClick={this.handleMarkerRightClick}

                    onBoundsChanged={this.handleBoundsChanged}
                    onSearchBoxMounted={this.handleSearchBoxMounted}
                    bounds={this.state.bounds}
                    onPlacesChanged={this.handlePlacesChanged}
                />
            </div>
        );
    }
}
