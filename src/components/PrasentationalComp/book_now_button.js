import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'

import BookingForm from './booking_form'

function showBookingForm(e) {
    e.preventDefault();
    console.log('Button Clicked');
    return <BookingForm />

}

class BookNowButton extends Component{
    render() {
        return (
            <div>
                <Button color='green' className='book-button' onClick={ showBookingForm }>Book Now!</Button>
            </div>
        )
    }
}

export default BookNowButton

