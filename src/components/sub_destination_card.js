import React, { Component } from 'react'
import { List, Segment, Container } from 'semantic-ui-react'


const sub_destination_style = {
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ddd',
}

class SubDestinationCard extends Component {
    render() {
        return (
            <Container style={ sub_destination_style }>
                <List>
                    <List.Item>
                        <List.Content>
                            <List.Header>City A</List.Header>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </List.Content>
                    </List.Item>
                </List>
            </Container>
        )
    }
}

export default SubDestinationCard;