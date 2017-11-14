import React, { Component } from 'react'
import { Grid, Container } from 'semantic-ui-react'

import TourMap from './../PrasentationalComp/tour-map'
import TourPortfolio from './../PrasentationalComp/tour-portfolio'
import TourHeadingDescription from './../PrasentationalComp/tour_heading_description'
import TourDescription from './../PrasentationalComp/tour_description'

const banner_style = {
    backgroundImage: 'url("images/hikingbg.jpeg")',
    backgroundRepeat: 'no-repeat',
    backgroundColor : '#1e1e1f'
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
                         <TourDescription/>
                    </Grid.Row>
                </Grid>
                </Container>
            </section>
        )
    }
}

export default FullWidthBanner;