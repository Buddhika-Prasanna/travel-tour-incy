import React, { Component } from 'react'
import { Search, Grid, Header, Container  } from 'semantic-ui-react'

import SocialMediaIcons from './social_media_icons'



 class HeaderTopBar extends Component {

  render() {

    return (
        <section className={"color"}>
          <Container>
            <Grid>
              <Grid.Column width={16}>
              </Grid.Column>
              <Grid.Column width={10}>
                  <SocialMediaIcons />
              </Grid.Column>
              <Grid.Column width={6}>
                <Search />
              </Grid.Column>
            </Grid>
          </Container>
        </section>
    )
  }
}

export default HeaderTopBar;