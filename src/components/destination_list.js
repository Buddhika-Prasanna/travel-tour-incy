import React, {Component} from 'react'
import { Grid } from 'semantic-ui-react'

class DestinationList extends Component {
    render () {
        return (
            <div >
                <Grid className="destination-list">
                    <Grid.Row columns={3}>
                    <Grid.Column>
                        <h5>City A</h5>
                    </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}

export default DestinationList;