import React, {FC} from 'react';

import styles from './ServicesList.module.scss';
import {hourSitterImagePeople, hourSitterImageSun} from 'assets';
import { RequestButton } from 'components';

const ServicesList: FC = () => {
    return (
        <section className={styles.sectionContainer}>
            <div className={styles.hourSitterContainer}>
                <h1>Няня на час</h1>
                <div className={styles.serviceDescriptionContainer}>
                    <ul className={styles.serviceDescriptionsList}>
                        <li>
                            <p>кратковременное освобождение родителей от ухода за ребенком(детьми)</p>
                        </li>
                        <li>
                            <p>учет индивидуальных требований и предпочтений родителей</p>
                        </li>
                        <li>
                            <p>комфорт и забота о вашем ребенке</p>
                        </li>
                    </ul>
                    <RequestButton />
                </div>

                {/* Background part */}
                <div className={styles.sunImageContainer}>
                    <img src={hourSitterImageSun} alt="Sun" />
                </div>
                <div className={styles.peopleImageContainer}>
                    <img src={hourSitterImagePeople} alt="Sun" />
                </div>
            </div>
            <div className={styles.regularSitterContainer}>
                <h1>Няня на постоянной основе</h1>
            </div>
        </section>
    );
};

export default ServicesList;
