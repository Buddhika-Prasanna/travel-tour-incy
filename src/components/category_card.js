import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'

class CategoryCard extends Component {
    render() {
        return (
                <div className ="col-md-12 category-card">
                    <img className="img-responsive" src="images/tour.jpeg" />
                    <h3>Most Popular</h3>
                    <div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                    </div>
                </div>
        )
    }
}

export default CategoryCard;