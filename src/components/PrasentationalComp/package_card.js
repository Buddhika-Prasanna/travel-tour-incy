import React, { Component } from 'react'
import { Container, Grid, Rating } from 'semantic-ui-react'

const package_card_style = {
    backgroundImage: 'url("images/tour_A.jpeg")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '300px',
    display: 'false',
    color : 'black'
}

class PackageCard extends Component {
    constructor(props){
        super(props);

        this.state={

        }

    }
    render() {
        return (
                <div style = { package_card_style } className ="col-md-12 package-card">
                    <div className="cat-card-empty">
                    </div>
                    <div className="tour-name">
                        <h3>{this.props.packageName}</h3>
                        <div style={{'textAlign':'center'}}>
                        <Rating maxRating={5} defaultRating={5} icon='star' size='small' />
                        </div>
                    </div>
                </div>
        )
    }
}

export default PackageCard;