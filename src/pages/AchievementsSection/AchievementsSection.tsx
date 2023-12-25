import React, {FC} from 'react';

import styles from './AchievementsSection.module.scss';
import {careIcon, childEducationIcon, experienceIcon, flexIcon, privacyIcon, professionalismIcon} from 'assets';

const AchievementsSection: FC = () => {
    return (
        <section className={styles.sectionContainer}>
            <ul className={styles.contentList}>
                <li className={styles.listItem}>
                    <div className={styles.iconContainer}><img src={professionalismIcon} alt="" /></div>
                    <h4>Профессионализм</h4>
                    <p>Наши няни прошли строгий отбор и обладают опытом работы с детьми</p>
                </li>
                <li className={styles.listItem}>
                    <div className={styles.iconContainer}><img src={childEducationIcon} alt="" /></div>
                    <h4>Развитие ребёнка</h4>
                    <p>Няня не только присмотрит за ребенком, но и поможет ему развиваться</p>
                </li>
                <li className={styles.listItem}>
                    <div className={styles.iconContainer}><img src={flexIcon} alt="" /></div>
                    <h4>Гибкость и удобство</h4>
                    <p>Мы предлагаем гибкие графики работы нянь, чтобы вы могли заниматься своими делами</p>
                </li>
                <li className={styles.listItem}>
                    <div className={styles.iconContainer}><img src={careIcon} alt="" /></div>
                    <h4>Любовь и забота</h4>
                    <p>Наши няни проявляют любовь и заботу к детям</p>
                </li>
                <li className={styles.listItem}>
                    <div className={styles.iconContainer}><img src={privacyIcon} alt="" /></div>
                    <h4>Конфиденциальность</h4>
                    <p>Гарантия конфиденциальности и безопасности данных</p>
                </li>
                <li className={styles.listItem}>
                    <div className={styles.iconContainer}><img src={experienceIcon} alt="" /></div>
                    <h4>Опыт и репутация</h4>
                    <p>Агенство имеет опыт и хорошую репутацию в своей сфере</p>
                </li>
            </ul>
        </section>
    );
};

export default AchievementsSection;
