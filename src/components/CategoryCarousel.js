import React, { Component } from 'react'
import OwlCarousel from 'react-owl-carousel'
import { Container } from 'semantic-ui-react'

import CategoryCard from './category_card'


var itemsToDisplay = [<CategoryCard />, <CategoryCard />, <CategoryCard />, <CategoryCard />, <CategoryCard />, <CategoryCard />];

class CategoryCarousel extends Component {
    render() {
        return (
            <Container>
                <OwlCarousel
                    className="owl-theme category-carousel-container"
                    loop margin={50} nav
                    items={4}
                    autoplay={true}
                    autoplayTimeout={2500}
                    animateIn={true}
                    animateOut={true}
                    autoplayHoverPause={true}
                >
                    {itemsToDisplay.map(
                        function(catCard) {
                            return (
                                <div class="item">
                                    { catCard }
                                </div>
                            )
                        }
                    )}
                </OwlCarousel>
            </Container>
        )
    }
}

export default CategoryCarousel