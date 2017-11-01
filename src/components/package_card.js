import React, { Component } from 'react'
import { Container, Grid } from 'semantic-ui-react'

class PackageCard extends Component {
    render() {
        return (
                <div className ="col-md-12 package-card">
                    <img className="img-responsive" src="images/tour_A.jpeg" />
                    <h3>Tour A</h3>
                    <div className="light-border">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                    </div>
                    <div>
                        <Grid className="container">
                            <Grid.Row columns={2}>
                                <Grid.Column>
                                    <ul>
                                        <li>Feature</li>
                                        <li>Feature</li>
                                        <li>Feature</li>                                        
                                    </ul>
                                </Grid.Column>

                                <Grid.Column>
                                    <ul>
                                        <li>Feature</li>
                                        <li>Feature</li>
                                        <li>Feature</li>                                        
                                    </ul>
                                </Grid.Column>                             
                            </Grid.Row>
                        </Grid>
                    </div>
                </div>
        )
    }
}

export default PackageCard;