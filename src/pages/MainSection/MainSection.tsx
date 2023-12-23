import React, {FC} from 'react';

import styles from './MainSection.module.scss';
import {mainSectionImage} from 'assets';
import {RequestButton} from 'components';

const MainSection: FC = () => {
    return (
        <section className={styles.sectionContainer}>
            <div className={styles.headingContainer}>
                <h2>ПРЕДОСТАВЛЕНИЕ УСЛУГ ПО ПОДБОРУ НЯНИ РАЗНЫХ ВОЗРАСТОВ</h2>
                <RequestButton />
            </div>
            <div className={styles.imageContainer}>
                <img src={mainSectionImage} alt="Main section" />
            </div>
        </section>
    );
};

export default MainSection;
