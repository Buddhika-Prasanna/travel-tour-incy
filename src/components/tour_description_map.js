import React, { Component } from 'react'
import { Container, Grid, Segment, Divider } from 'semantic-ui-react'
import TourMap from './tour-map'
import TourPortfolio from './tour-portfolio'

class TourDescriptionMap extends Component{
    render() {
        return(
            <div className="container" style={{'width':'1000px'}}>
            <h3 className="text-center" style={{ 'text-align':'center' }}>Tour A - Routes and Destinations</h3>
            <Divider />
                <Grid>
                    <Grid.Row columns={2}>
                        <Grid.Column width={9}>
                            <TourPortfolio />
                        </Grid.Column>
                        <Grid.Column width={7}>
                            <TourMap/>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Divider />
            </div>
        )
    }
}

export default TourDescriptionMap;