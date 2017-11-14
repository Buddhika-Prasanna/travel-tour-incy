import React, { Component } from 'react'
import { Grid, Container  } from 'semantic-ui-react'

class Footer extends Component {
    render() {
        return(
            <section className={"color"}>
                <Container>
                    <Grid>
                        <Grid.Column width={10}>

                        </Grid.Column>
                        <Grid.Column width={6}>
                            <h3 className={"dummy-logo-footer"}>Travel Tour</h3>
                        </Grid.Column>
                    </Grid>
                </Container>
            </section>
        )
    }

}

export default Footer