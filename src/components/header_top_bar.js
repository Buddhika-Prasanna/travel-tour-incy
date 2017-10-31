import React, { Component } from 'react'
import { Search, Grid, Header } from 'semantic-ui-react'


 class HeaderTopBar extends Component {

  render() {

    return (
      <Grid>
        <Grid.Column width={8}>
          <Search />
        </Grid.Column>

      </Grid>
    )
  }
}

export default HeaderTopBar;