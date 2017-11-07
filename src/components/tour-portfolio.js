import React, { Component } from 'react'
import Container from 'semantic-ui-react'
import TourImageCarousel from './tour_image_carousel'

class TourPortfolio extends Component{
    render() {
        return (
            <div>
                <div className ="tour-description">
                <h3>Tour A</h3>
                    <div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                    </div>
                <TourImageCarousel />
                </div>
            </div>
        )
    }
}

export default TourPortfolio;