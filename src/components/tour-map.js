import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'

const map_styles ={
    height: '100%'
}

class TourMap extends Component {
    render () {
        return (
            <Container className="map-wrapper tour-map-style">
                <img className="img-responsive tour-map" src="images/google-maps.jpeg" />
            </Container>
        )
    }
}

export default TourMap;