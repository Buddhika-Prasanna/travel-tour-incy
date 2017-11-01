import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Container } from 'semantic-ui-react'

export default class MainNavigation extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
    <Container className="main-navigation">
        <Menu stackable>

            <Menu.Item
            name='most-popular'
            active={activeItem === 'most-popular'}
            onClick={this.handleItemClick}
            >
            Most Popular
            </Menu.Item>

            <Menu.Item
            name='tour-packages'
            active={activeItem === 'tour-packages'}
            onClick={this.handleItemClick}
            >
            Tour Packages
            </Menu.Item>

            <Menu.Item
            name='booking'
            active={activeItem === 'booking'}
            onClick={this.handleItemClick}
            >
            Booking
            </Menu.Item>

            <Menu.Item
            name='sign-in'
            active={activeItem === 'sign-in'}
            onClick={this.handleItemClick}
            >
            Sign-in
            </Menu.Item>
        </Menu>
    </Container>
    )
  }
}
