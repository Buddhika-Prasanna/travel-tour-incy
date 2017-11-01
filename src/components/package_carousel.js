import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'

import PackageCard from './package_card'

var noOfCategories = [ 1, 2, 3]

class CategoryCarousel extends Component{
    constructor(){
        super();
        this.state= { visibility: 'hidden'}

    }
    render() {
        return(
            <div className="category-carousel col-md-12">
                <Grid>
                <Grid.Row columns={3}>
                    {noOfCategories.map(
                        function(number) {
                            return (
                                <Grid.Column className="col-md-4">
                                    <PackageCard />
                                </Grid.Column>
                            )
                        }
                    )}
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}

export default CategoryCarousel;