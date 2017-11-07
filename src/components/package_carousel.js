import React, { Component } from 'react'
import OwlCarousel from 'react-owl-carousel'
import { Container } from 'semantic-ui-react'

import PackageCard from './package_card'


var itemsToDisplay = [<PackageCard />, <PackageCard />, <PackageCard />, <PackageCard />, <PackageCard />, <PackageCard />];

class CategoryCarousel extends Component {
    render() {
        return (
            <Container>
                <h3 className="text-center">Most Popular Tours</h3>
                <OwlCarousel
                    className="owl-theme category-carousel-container"
                    loop margin={50} nav
                    items={3}
                    autoplay={false}
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