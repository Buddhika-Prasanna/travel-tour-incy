import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import './style/style.css';
import './style/bootstrap.css';

import CategoryCarousel from './components/ContainerComp/category_carousel';
import FullWidthBanner from './components/ContainerComp/full-width-banner';
import PackageCarousel from './components/ContainerComp/package_carousel';
import MainNavigation from './components/ContainerComp/main_navigation';
import HeaderTopBar from './components/ContainerComp/header_top_bar';
import AllPackages from './components/ContainerComp/all_packages'
import Footer from './components/ContainerComp/footer';

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
            users: []
            
        }
    }

    componentDidMount() {
    fetch('http://localhost:3000/users', {mode: 'no-cors'})
    
    .then(res => res.text())
    .then(users => console.log(users));
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
                <div className="App">
                    <h1>Users</h1>
                    {this.state.package_list.map(user =>
                    <div key={user.id}>{user.username}</div>
                    )}
                </div>
            </div>
        );
    }
}

export default App;
