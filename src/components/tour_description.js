import React, { Component } from 'react'
import SubDestinationDescription from './sub_destination_description'
import { Container, Grid, Button, Segment } from 'semantic-ui-react'
import TourDescriptionMap from './tour_description_map'
import SubDestinationCard from './sub_destination_card'
import TourImageCarousel from './tour_image_carousel'
import PopupForm from './form_popup'


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
            <div className="package-carousel-wrapper">
                <Grid>
                    <Grid.Row>
                        <Grid.Column>
                            <TourDescriptionMap />
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
            </div>
                
        )
    }
}

export default TourDescription;