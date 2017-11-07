import React, { Component } from 'react'
import { Container, Grid, Button } from 'semantic-ui-react'

import TourMap from './tour-map'
import SubDestinationCard from './sub_destination_card'
import SubDestinationDescription from './sub_destination_description'
import TourImageCarousel from './tour_image_carousel'
import PopupForm from './form_popup'
import TourPortfolio from './tour-portfolio'

const tour_description_style = {
    marginTop: '20px',
    marginBottom: '20px',
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ddd'
}

var sub_destinations_to_display = [<SubDestinationCard />, <SubDestinationCard />, <SubDestinationCard />, <SubDestinationCard />]

class TourDescription extends Component{
    render() {
        return (
            <Container style = { tour_description_style }>
                <Grid>
                    <Grid.Row columns={2} className="test">
                        <Grid.Column width={9}>
                            <div className ="tour-description">
                            <TourPortfolio />
                            </div>
                        </Grid.Column>
                        <Grid.Column width={7}>
                            <TourMap/>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={2}>
                        <Grid.Column width={10}>
                            {sub_destinations_to_display.map(
                                function(SubDesCard) {
                                    return (
                                        <div class="sub_destination_card" >
                                            { SubDesCard }
                                        </div>
                                    )
                                }
                            )}
                            
                        </Grid.Column>
                        <Grid.Column width={6}>
                            <SubDestinationDescription />
                            <PopupForm />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                </Container>
        )
    }
}

export default TourDescription;