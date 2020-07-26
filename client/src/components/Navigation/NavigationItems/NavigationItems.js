import React from 'react';

import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className='NavigationItems'>
        <NavigationItem link="/" exact>Welcome</NavigationItem>
        <NavigationItem link="/requestMethods">RequestMethodsPie</NavigationItem>
        <NavigationItem link="/answerCodes">AnswerCodesPie</NavigationItem>
    </ul>
);

export default navigationItems;