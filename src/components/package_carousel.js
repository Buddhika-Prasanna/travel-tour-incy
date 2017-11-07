import React, { Component } from 'react'
import OwlCarousel from 'react-owl-carousel'
import { Container } from 'semantic-ui-react'

import PackageCard from './package_card'


var itemsToDisplay = [<PackageCard />, <PackageCard />, <PackageCard />, <PackageCard />, <PackageCard />, <PackageCard />];

class CategoryCarousel extends Component {
    render() {
        return (
            <div className="package-carousel-wrapper container">
                <h3 className="text-center">Most Popular Tours</h3>
                <OwlCarousel
                    className="owl-theme"
                    loop margin={20} nav
                    items={4}
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
            </div>
        )
    }
}

export default CategoryCarousel