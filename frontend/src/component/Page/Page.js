import React from 'react'
import {
    Switch,
    Route
} from "react-router-dom";

import LandingPage from './LandingPage/LandingPage.js';
import ProductPage from './ProductPage/ProductPage.js';

const Page = () => {
    return (
        <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/product" component={ProductPage} />
            {/* <Route path="/info" component={info} /> */}
        </Switch>
    )
}

export default Page
