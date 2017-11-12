import React, { Component } from 'react'
import { Grid, Container } from 'semantic-ui-react'

import PackageCard from './package_card'

var all_tours = ["Galle Fort", "Madu River", "Stilt Fishermen", "Turtle Hatchery", "Galle Fort", "Madu River", "Stilt Fishermen", "Turtle Hatchery", "Stilt Fishermen"];

class AllPackages extends Component {
    constructor(props){
        super(props);

        this.state={

        }
    }

    render () {
        return (
            <Container className="all-tours-style">
                <Grid columns={3}>
                    {all_tours.map(
                        function(items) {
                            return(
                                <Grid.Column>
                                    <PackageCard packageName={ items } />
                                </Grid.Column>
                            )
                    })
                    }
                </Grid>
            </Container>
        )
    }
}

export default AllPackages;