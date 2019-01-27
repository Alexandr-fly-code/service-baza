import React from 'react';
import  './headerStyles/navigation.css';

import { slide as Menu } from 'react-burger-menu';


const Navigation = () => {
    function showSettings (event) {
        event.preventDefault();
        
      }
    return (
        <div className='Navigation' id="outer-container">
        
        {/* <Menu isOpen={ true }>
            <main id="page-wrap">
                <a id="home" className="menu-item" href="/">Главная</a>
                <a id="about" className="menu-item" href="/about">Аксессуары</a>
                <a id="contact" className="menu-item" href="/contact">Сервисный центр</a>
                <a id="contact" className="menu-item" href="/contact">Гарантия</a>
                <a id="contact" className="menu-item" href="/contact">Отзывы</a>
                <a  className="menu-item--small" href="">Контакты</a>
            </main>
        </Menu>
        <button type="button" className={classes.btn} ></button> */}
         <Menu >
            <a id="home" href="/">Главная</a>
            <a id="about" href="/about">Аксессуары</a>
            <a id="contact" href="/contact">Сервисный центр</a>
            <a id="contact" href="/contact">Гарантия</a>
            <a id="contact" href="/contact">Отзывы</a>
            <a id="contact" href="/contact">Контакты</a>
      </Menu>
        
            {/* <ul>
                <li>Главная</li>
                <li>Аксессуары</li>
                <li>Сервисный центр</li>
                <li>Гарантия</li>
                <li>Отзывы</li>
                <li>Контакты</li>
            </ul> */}
        </div>
    );
};

export default Navigation;