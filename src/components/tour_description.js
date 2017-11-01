import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'

class TourDescription extends Component{
    render() {
        return (
            <Container className ="tour-description">
                    <img className="img-responsive" src="images/tour_A.jpeg" />
                    <h3>Tour A</h3>
                    <div className="light-border">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                    </div>
                    <div>
                        
                    </div>
            </Container>
        )
    }
}

export default TourDescription;