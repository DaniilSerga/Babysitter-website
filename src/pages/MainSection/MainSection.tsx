import React, {FC} from 'react';

import styles from './MainSection.module.scss';
import { mainSectionImage } from 'assets';

const MainSection: FC = () => {
    return (
        <section className={styles.sectionContainer}>
            <div className={styles.headingContainer}>
                <h2>ПРЕДОСТАВЛЕНИЕ УСЛУГ ПО ПОДБОРУ НЯНИ РАЗНЫХ ВОЗРАСТОВ</h2>
                <button className={styles.submitButton}>
                    <p>Оставить заявку</p>
                </button>
            </div>
            <div className={styles.imageContainer}>
                <img src={mainSectionImage} alt="Main section" />
            </div>
        </section>
    );
};

export default MainSection;
