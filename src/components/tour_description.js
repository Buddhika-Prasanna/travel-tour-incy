import React, { Component } from 'react'
import { Container, Grid, Button } from 'semantic-ui-react'

import TourMap from './tour-map'
import SubDestinationCard from './sub_destination_card'
import SubDestinationDescription from './sub_destination_description'
import TourImageCarousel from './tour_image_carousel'
import BookNowButton from './book_now_button'

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
                                <TourImageCarousel />
                                </div>
                            </Grid.Column>
                            <Grid.Column>
                                <TourMap/>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row columns={2}>
                            <Grid.Column width={10}>
                                <SubDestinationCard />
                            </Grid.Column>
                            <Grid.Column width={6}>
                                <SubDestinationDescription />
                                <BookNowButton />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
        )
    }
}

export default TourDescription;