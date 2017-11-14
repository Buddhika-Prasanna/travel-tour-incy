import React, { Component } from 'react'
import { List, Segment } from 'semantic-ui-react'

class SubDestinationDescription extends Component {
    render() {
        return (
            <Segment>
                <List divided relaxed>
                    <List.Item>
                        <List.Content>
                            <List.Header>City A</List.Header>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </List.Content>
                    </List.Item>
                </List>
            </Segment>
        )
    }
}

export default SubDestinationDescription;