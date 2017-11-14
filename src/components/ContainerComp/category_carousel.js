import React, { Component } from 'react'
import OwlCarousel from 'react-owl-carousel'
import { Container, Grid } from 'semantic-ui-react'

import CategoryCard from './../PrasentationalComp/category_card'


class CategoryCarousel extends Component {
    constructor(props){
        super(props);

        this.state ={
        }
    }
    render() {
        return (
            <Container>
                <Grid>
                    <Grid.Row style={{'marginLeft':'1px'}}>
                        <Grid.Column width={16}>
                            <OwlCarousel
                                className="owl-theme"
                                loop margin={10} nav
                                items={5}
                                autoplay={true}
                                autoplayTimeout={2500}
                                animateIn={true}
                                animateOut={true}
                                autoplayHoverPause={true}
                                ref={(input) => { this.navInput = input; }}>
                                {this.props.categories.map(
                                    function(catCard) {
                                        return (
                                            <div className="item">
                                                <CategoryCard heading={catCard}/>
                                            </div>
                                        )
                                    }
                                )}
                            </OwlCarousel>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        )
    }
}

export default CategoryCarousel