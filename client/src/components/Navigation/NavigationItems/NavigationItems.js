import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import styles from './NavigationItems.module.css';


const navigationItems = () => (
    <ul className={styles.NavigationItems}>
        <NavigationItem link="/request-methods">Request Methods Distribution</NavigationItem>
        <NavigationItem link="/answer-codes">Answer Status Rate</NavigationItem>
        <NavigationItem link="/short-answers">Short Answer Rate</NavigationItem>
        <NavigationItem link="/requests-per-min">Requests Per Minute</NavigationItem>
        <div className={styles.NavigationItemRight}>
            <NavigationItem  link="/api/upload_file">Upload Log file (JSON)</NavigationItem>
        </div>
    </ul>
);

export default navigationItems;