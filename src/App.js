import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import './style/style.css';
import './style/bootstrap.css';

import HeaderTopBar from './components/header_top_bar';
import MainNavigation from './components/main_navigation';
import PackageCarousel from './components/package_carousel';
import TourDescription from './components/tour_description';
import CategoryCarousel from './components/category_carousel';
import Footer from './components/footer';

class App extends Component {
    constructor(props) {
        super(props);

        this.state= { currentState: ''}
    }

    render() {
        return (
            <div>
                <HeaderTopBar />
                <div className={"container"}>
                    <MainNavigation />
                    <CategoryCarousel/>
                    <PackageCarousel />
                    <TourDescription />
                </div>
                <Footer/>
            </div>
        );
    }
}

export default App;
