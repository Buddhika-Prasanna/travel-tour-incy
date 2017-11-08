import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'

class TourMap extends Component {
    render () {
        return (
            <Container className="map-wrapper">
                <img className="img-responsive tour-map" src="images/google-maps.jpeg" />
            </Container>
        )
    }
}

export default TourMap;