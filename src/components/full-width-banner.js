import React, { Component } from 'react'
import { Grid, Container } from 'semantic-ui-react'

import TourMap from './tour-map'
import TourPortfolio from './tour-portfolio'
import TourHeadingDescription from './tour_heading_description'

const banner_style = {
    backgroundImage: 'url("images/full-width-banner.jpeg")',
}


class FullWidthBanner extends Component {
    render () {
        return(
            <section style ={ banner_style }>
            <Container>
                <Grid>
                    <Grid.Row columns={2}>
                        <Grid.Column width={9}>
                            <TourHeadingDescription />
                        </Grid.Column>
                        <Grid.Column width={7}>
                            <TourMap/>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                    </Grid.Row>
                </Grid>
                </Container>
            </section>
        )
    }
}

export default FullWidthBanner;