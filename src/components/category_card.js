import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'

const cat_card_style = {
    backgroundImage: 'url("images/tour_A.jpeg")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '300px',
    display: false,
    color : 'black'
}

class CategoryCard extends Component {
    render() {
        return (
                <div  style = { cat_card_style } className ="col-md-12 category-card">
                    <div className="test">
                    <h3>Most Popular</h3>
                    <div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                    </div>
                    </div>
                </div>
        )
    }
}

export default CategoryCard;