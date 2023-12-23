import React, {FC} from 'react';

import styles from './ServicesSection.module.scss';
import {servicesHeadingImage} from 'assets';

const ServicesSection: FC = () => {
    return (
        <section className={styles.sectionContainer}>
            <div className={styles.headingContainer}>
                <div className={styles.headingTextContainer}>
                    <h2>Наши услуги</h2>
                </div>
            </div>
            <div className={styles.imageContainer}>
                <img src={servicesHeadingImage} alt="Services section" />
            </div>
        </section>
    );
};

export default ServicesSection;
