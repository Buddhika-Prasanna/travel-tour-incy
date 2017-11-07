import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'


class TourDescription extends Component{
    render() {
        return (
            <div className ="tour-description col-md-6">
                    <h3>Tour A</h3>
                    <img className="img-responsive" src="images/tour_A.jpeg" />
                    <div className="light-border">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                    </div>
            </div>
        )
    }
}

export default TourDescription;