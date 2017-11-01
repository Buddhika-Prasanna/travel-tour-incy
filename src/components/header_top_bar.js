import React, { Component } from 'react'
import { Search, Grid, Header } from 'semantic-ui-react'
import { Container } from 'semantic-ui-react'


 class HeaderTopBar extends Component {

  render() {

    return (
      <Container>
        <Grid>
          <Grid.Column width={16}>
          </Grid.Column>
          <Grid.Column width={10}>
            <img className="main-logo img-responsive" src="images/sample_logo.png" />
          </Grid.Column>
          <Grid.Column width={6}>
            <Search />
          </Grid.Column>
        </Grid>
      </Container>
    )
  }
}

export default HeaderTopBar;