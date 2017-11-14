import React, { Component } from 'react'
import OwlCarousel from 'react-owl-carousel'
import { Container, Divider, Segment, Grid, Button, Icon } from 'semantic-ui-react'

import PackageCard from './../PrasentationalComp/package_card'


var itemsToDisplay = [<PackageCard />, <PackageCard />, <PackageCard />, <PackageCard />, <PackageCard />, <PackageCard />];

class CategoryCarousel extends Component {
    render() {
        return (
            <Container className="package-carousel-wrapper">
                <Grid>
                    <Grid.Row style={{'marginLeft':'1px'}}>
                        {/*<Grid.Column width={1}>
                            <Button basic className="own-nav-custom" icon onClick={ ()=> {this.navInput.prev()}}>
                                <Icon name='chevron left' />
                            </Button>
                        </Grid.Column>*/}
                        <Grid.Column width={16}>
                            <OwlCarousel
                                className="owl-theme"
                                loop margin={20} nav
                                items={4}
                                autoplay={true}
                                autoplayTimeout={2500}
                                animateIn={true}
                                animateOut={true}
                                autoplayHoverPause={true}
                                ref={(input) => { this.navInput = input; }}
                            >
                                {this.props.packages.map(
                                    function(catCard) {
                                        return (
                                            <div className="item">
                                                <PackageCard packageName={catCard} />
                                            </div>
                                        )
                                    }
                                )}
                            </OwlCarousel>
                            </Grid.Column>
                        {/*<Grid.Column width={1}>
                            <Button basic className="own-nav-custom"  icon onClick={ ()=> {this.navInput.next()}}>
                                <Icon name='chevron right' />
                            </Button>
                        </Grid.Column>*/}
                    </Grid.Row>
                </Grid>
            </Container>
        )
    }
}

export default CategoryCarousel