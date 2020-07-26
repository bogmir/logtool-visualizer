import React from 'react';

import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className='NavigationItems'>
        {/* <NavigationItem link="/" exact>Log Stats</NavigationItem> */}
        <NavigationItem link="/requestMethods">Request Methods Distribution</NavigationItem>
        <NavigationItem link="/answerCodes">Answer Status Rate</NavigationItem>
        <NavigationItem link="/shortAnswers">Short Answer Rate</NavigationItem>
        <NavigationItem link="/requestsPerMin">Requests Per Minute</NavigationItem>
    </ul>
);

export default navigationItems;