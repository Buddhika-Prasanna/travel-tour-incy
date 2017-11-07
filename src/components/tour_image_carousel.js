import React, { Component } from 'react'
import OwlCarousel from 'react-owl-carousel'
import { Container } from 'semantic-ui-react'

import CategoryCard from './category_card'


var itemsToDisplay = [<CategoryCard />, <CategoryCard />, <CategoryCard />, <CategoryCard />, <CategoryCard />, <CategoryCard />];

class TourImageCarousel extends Component {
    render() {
        return (
            <Container>
                <OwlCarousel
                    className="owl-theme category-carousel-container"
                    items={1}
                    loop={true}
                    autoplay={true}
                    autoplayTimeout={2500}
                    autoplayHoverPause={true}
                >
                    <div class="item">
                        <img className="img-responsive" src="images/tour_C.jpeg" />
                    </div>
                    <div class="item">
                        <img className="img-responsive" src="images/Sri-Lanka-tea.jpeg" />
                    </div>
                    <div class="item">
                        <img className="img-responsive" src="images/tour_A.jpeg" />
                    </div>
                    {/*{itemsToDisplay.map(*/}
                        {/*function(img) {*/}
                            {/*return (*/}
                                {/*<div class="item">*/}
                                    {/*{ img }*/}
                                {/*</div>*/}
                            {/*)*/}
                        {/*}*/}
                    {/*)}*/}
                </OwlCarousel>
            </Container>
        )
    }
}

export default TourImageCarousel;