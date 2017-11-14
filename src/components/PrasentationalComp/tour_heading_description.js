import React, { Component } from 'react'
import { Divider } from 'semantic-ui-react'

class TourHeadingDescription extends Component {
    render() {
        return (
            <div className="tour-heading-description-style">
                <h1 className="full-width-tour-heading">Horton Plains National Park</h1>
                <Divider />
                <p className="full-width-tour-description">Horton Plains National Park is a protected area in the central highlands of Sri Lanka and is covered by montane 
                grassland and cloud forest. This plateau at an altitude of 2,100–2,300 metres (6,900–7,500 ft) is rich in biodiversity 
                and many species found here are endemic to the region. This region was designated a national park in 1988. It is also a 
                popular tourist destination and is situated 8 kilometres (5.0 mi) from Ohiya, 6 kilometres (3.7 mi) from the world famous 
                Ohiya Gap/Dondra Watch and 32 kilometres (20 mi) from Nuwara Eliya.</p>
            </div>
        )
    }
}

export default TourHeadingDescription;