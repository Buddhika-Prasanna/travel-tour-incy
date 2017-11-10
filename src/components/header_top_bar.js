import React, { Component } from 'react'
import { Search, Grid, Header, Container  } from 'semantic-ui-react'

import SocialMediaIcons from './social_media_icons'



 class HeaderTopBar extends Component {

  render() {

    return (
        <section className="color">
          <Container>
            <Grid>
              <Grid.Column width={16}>
              </Grid.Column>
              <Grid.Column width={6} verticalAlign={'middle'}>
                  <h3 className={"dummy-logo"}>Travel Tour</h3>
              </Grid.Column>
              <Grid.Column width={7}>
                  <Search />
              </Grid.Column>
              <Grid.Column width={3} verticalAlign={'middle'}>
                <SocialMediaIcons />
              </Grid.Column>
            </Grid>
          </Container>
        </section>
    )
  }
}

export default HeaderTopBar;