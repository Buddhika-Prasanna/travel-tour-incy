import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'
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
import FullWidthBanner from './components/full-width-banner';
import AllPackages from './components/all_packages'

const bgstyle = {
background:'url("/images/main-background.jpeg")', 
backgroundSize: 'cover', 
backgroundRepeat: 'no-repeat', 
backgroundPosition: 'absolute',
backgroundOpacity: '0.2'
}

class App extends Component {
    constructor(props) {
        super(props);

        this.state= { 
            category_list :["Family", "Adventure", "Hill Country", "Wild Life", "Culture", "Beach"],
            package_list : ["Galle Fort", "Madu River", "Stilt fishermen", "Turtle Hatchery"],

            
        }
    }

    render() {
        return (
            <div>
                <HeaderTopBar />
                <MainNavigation categories={this.state.category_list} />
                <CategoryCarousel categories={this.state.category_list} />
                <AllPackages />
                <PackageCarousel packages={this.state.package_list} />
                <FullWidthBanner />
                <Footer/>
            </div>
        );
    }
}

export default App;
