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
        <Menu fluid widths={this.props.categories.length}>
        {this.props.categories.map(
          function(MenuItems) {
            return(
              <Menu.Item name={ MenuItems } active={activeItem === { MenuItems }} onClick={MenuItems.handleItemClick} />
            )
          })
        }
      </Menu>
    </Container>
    )
  }
}
