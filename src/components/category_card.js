import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'

const cat_card_style = {
    backgroundImage: 'url("images/tour_A.jpeg")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '100px',
    display: false,
    color : 'black'
}

class CategoryCard extends Component {
    render() {
        return (
                <div  style = { cat_card_style } className ="col-md-12 category-card">
                    <div className="category-card-details">
                        <div className="cat-card-empty" style={{'height':'60%'}}>

                        </div>
                        <div className="cat-card-name">
                        <h3>Most Popular</h3>
                        </div>
                    </div>
                </div>
        )
    }
}

export default CategoryCard;