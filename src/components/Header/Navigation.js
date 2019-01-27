import React from 'react';
import classes from './headerStyles/navigation.module.css';

const Navigation = () => {
    return (
        <div className={classes.Navigation}>
            <ul>
                <li>Главная</li>
                <li>Аксессуары</li>
                <li>Сервисный центр</li>
                <li>Гарантия</li>
                <li>Отзывы</li>
                <li>Контакты</li>
            </ul>
        </div>
    );
};

export default Navigation;