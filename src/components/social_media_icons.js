import  React, { Component } from 'react'

import { Icon } from 'semantic-ui-react'

class SocialMediaIcons extends Component {
    render (){
        return(
            <div className={"social-media-icons"}>
                <Icon name='facebook square' size='large' />
                <Icon name='instagram' size='large' />
                <Icon name='linkedin square' size='large' />
            </div>
        )
    }
}

export default SocialMediaIcons;