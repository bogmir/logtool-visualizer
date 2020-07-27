import React from 'react';

import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className='NavigationItems'>
        {/* <NavigationItem link="/" exact>Log Stats</NavigationItem> */}
        <NavigationItem link="/request-methods">Request Methods Distribution</NavigationItem>
        <NavigationItem link="/answer-codes">Answer Status Rate</NavigationItem>
        <NavigationItem link="/short-answers">Short Answer Rate</NavigationItem>
        <NavigationItem link="/requests-per-min">Requests Per Minute</NavigationItem>
    </ul>
);

export default navigationItems;