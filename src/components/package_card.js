import React, { Component } from 'react'
import { Container, Grid, Rating } from 'semantic-ui-react'

const package_card_style = {
    backgroundImage: 'url("images/tour_C.jpeg")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '300px',
    display: false,
    color : 'black'
}

class PackageCard extends Component {
    render() {
        return (
                <div style = { package_card_style } className ="col-md-12 package-card">
                    <div className="cat-card-empty">
                    </div>
                    <div className="tour-name">
                        <h3>Tour A</h3>
                        <div style={{'text-align':'center'}}>
                        <Rating maxRating={5} defaultRating={5} icon='star' size='small' />
                        </div>
                    </div>
                </div>
        )
    }
}

export default PackageCard;