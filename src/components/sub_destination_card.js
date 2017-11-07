import React, { Component } from 'react'
import { List, Segment } from 'semantic-ui-react'


class SubDestinationCard extends Component {
    render() {
        return (
            <Segment>
                <List divided relaxed>
                    <List.Item>
                        <List.Content>
                            <List.Header>City A</List.Header>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content>
                            <List.Header>City B</List.Header>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content>
                            <List.Header>City C</List.Header>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content>
                            <List.Header>City C</List.Header>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </List.Content>
                    </List.Item>
                </List>
            </Segment>
        )
    }
}

export default SubDestinationCard;