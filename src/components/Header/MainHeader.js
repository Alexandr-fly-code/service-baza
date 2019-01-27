import React, { Component } from 'react';
import classes from './headerStyles/mainHeader.module.css';

import Logo from './Logo';
import Navigation from './Navigation';

import PropTypes from 'prop-types';


const propTypes = {
    
};


class MainHeader extends Component {
    render() {
        return (
            <div className={classes.headerContainer}>
                <Logo/>
                <Navigation/>
            </div>
        );
    }
}


MainHeader.propTypes = propTypes;


export default MainHeader;
