import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'

import CategoryCard from './category_card'

var noOfCategories = [ 1, 2, 3, 4]

class CategoryCarousel extends Component{
    render() {
        return(
            <div className="category-carousel col-md-12">
                <Grid>
                <Grid.Row columns={4}>
                    {noOfCategories.map(
                        function(number) {
                            return (
                                <Grid.Column className="col-md-3">
                                    <CategoryCard />
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