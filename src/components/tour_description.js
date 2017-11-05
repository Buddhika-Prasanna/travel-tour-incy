import React, { Component } from 'react'
import { Container, Grid } from 'semantic-ui-react'

import TourMap from './tour-map'

class TourDescription extends Component{
    render() {
        return (
                    <Grid divided='vertically'>
                        <Grid.Row columns={2}>
                            <Grid.Column>
                                <div className ="tour-description">
                                <h3>Tour A</h3>
                                    <div className="light-border">
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        </p>
                                    </div>
                                <img className="img-responsive" src="images/tour_A.jpeg" />
                                </div>
                            </Grid.Column>
                            <Grid.Column>
                                <TourMap/>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row columns={2}>
                            <Grid.Column>

                            </Grid.Column>
                            <Grid.Column>

                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
        )
    }
}

export default TourDescription;