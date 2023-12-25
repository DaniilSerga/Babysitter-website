import React, {FC} from 'react';
import styles from './Header.module.scss';
import {logo} from 'assets';

const Header: FC = () => {
    return (
        <header className={styles.headerContainer}>
            <img src={logo} alt="Logo" />
            <ul className={styles.linksContainer}>
                <li className={styles.link}>
                    <p>Главная</p>
                </li>
                <li className={styles.link}>
                    <p>Услуги</p>
                </li>
                <li className={styles.link}>
                    <p>Преимущества</p>
                </li>
                <li className={styles.link}>
                    <p>Отзывы</p>
                </li>
                <li className={styles.link}>
                    <p>Контакты</p>
                </li>
            </ul>
        </header>
    );
};

export default Header;
