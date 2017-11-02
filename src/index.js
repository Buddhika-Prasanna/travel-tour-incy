import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import './style/style.css';
import './style/bootstrap.css';

import HeaderTopBar from './components/header_top_bar';
import MainNavigation from './components/main_navigation';
import ResponsiveExampleContent from './components/test_comp';
import CategoryCarousel from './components/category_carousel';
import PackageCarousel from './components/package_carousel';
import Slider from './components/Slider/Slider';
import TourDescription from './components/tour_description';

import TourMap from './components/tour-map'

class App extends Component {
    constructor(props) {
        super(props);

        this.state= { currentState: ''}
    }

    render() {
        return (
            <div className="container">
                <HeaderTopBar />
                <MainNavigation />
                <CategoryCarousel />
                <PackageCarousel />
                <TourDescription />
                <TourMap />
            </div>
        );
    }
}

ReactDOM.render( <App />, document.getElementById('root'));