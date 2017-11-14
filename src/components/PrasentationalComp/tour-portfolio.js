import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import TourImageCarousel from './../ContainerComp/tour_image_carousel'

class TourPortfolio extends Component{
    render() {
        return (
                <Container className ="tour-description">
                <TourImageCarousel />
                </Container>
        )
    }
}

export default TourPortfolio;