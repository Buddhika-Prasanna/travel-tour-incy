import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'

import BookingForm from './booking_form'

class Popup extends Component {
  render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
        <button onClick={this.props.closePopup} icon='close' className="button-close">X</button>
            <div className="booking-form-wrapper">
                <BookingForm/>
            </div>
        </div>
      </div>
    );
  }
}
class PopupForm extends Component {
  constructor() {
    super();
    this.state = {
      showPopup: false
    };
  }
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }
  render() {
    return (
      <div className='app'>
        <Button color='green' className='book-button' onClick={this.togglePopup.bind(this)}>Book Now!</Button>
        {this.state.showPopup ? 
          <Popup
            text='Close Me'
            closePopup={this.togglePopup.bind(this)}
          />
          : null
        }
      </div>
    );
  }
};

export default PopupForm
