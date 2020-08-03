import React from 'react';
import Aux from '../../../hoc/Aux/Aux';
import Backdrop from '../../UI/Backdrop/Backdrop';
/* import Logo from '../../Logo/Logo';
 */
import NavigationItems from '../NavigationItems/NavigationItems';
import styles from './SideDrawer.module.css';


const sideDrawer = ( props ) => {
    let attachedClasses = [styles.SideDrawer, styles.Close];
    if (props.open) {
        attachedClasses = [styles.SideDrawer, styles.Open];
    }
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')} onClick={props.closed}>
{/*             <div className={classes.Logo}>
                    <Logo />
                </div>
 */}                
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    );
};

export default sideDrawer;