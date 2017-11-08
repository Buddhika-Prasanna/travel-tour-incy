import React, { Component } from 'react'
import OwlCarousel from 'react-owl-carousel'
import { Container, Segment, Divider } from 'semantic-ui-react'

import CategoryCard from './category_card'


var itemsToDisplay = [<CategoryCard />, <CategoryCard />, <CategoryCard />, <CategoryCard />, <CategoryCard />, <CategoryCard />];

class CategoryCarousel extends Component {
    render() {
        return (
            <Segment className="package-carousel-wrapper" style={{'backgroundColor':'#e5f1ff'}}>
                <h3 className="text-center">Tour Categories</h3>
                <Divider />
                <OwlCarousel
                    className="owl-theme"
                    loop margin={20} nav
                    items={5}
                    autoplay={true}
                    autoplayTimeout={2500}
                    animateIn={true}
                    animateOut={true}
                    autoplayHoverPause={true}
                >
                    {itemsToDisplay.map(
                        function(catCard) {
                            return (
                                <div className="item">
                                    { catCard }
                                </div>
                            )
                        }
                    )}
                </OwlCarousel>
            </Segment>
        )
    }
}

export default CategoryCarousel