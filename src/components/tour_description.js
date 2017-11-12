import React, { Component } from 'react'
import SubDestinationDescription from './sub_destination_description'
import { Container, Grid } from 'semantic-ui-react'
import SubDestinationCard from './sub_destination_card'
// import FullWidthBanner from './full-width-banner'
import PopupForm from './form_popup'

var sub_destinations_to_display = [<SubDestinationCard />, <SubDestinationCard />, <SubDestinationCard />, <SubDestinationCard />]

class TourDescription extends Component{
    render() {
        return (
            <div>
                {/*<FullWidthBanner />*/}
                <Container style={{ 'marginBottom' : '20px'}}>
                    <Grid>
                        <Grid.Row columns={2}>
                            <Grid.Column width={10}>
                                {sub_destinations_to_display.map(
                                    function(SubDesCard) {
                                        return (
                                            <div className="sub_destination_card" >
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
            </div>
                
        )
    }
}

export default TourDescription;