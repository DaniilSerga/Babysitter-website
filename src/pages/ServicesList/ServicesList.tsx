import React, {FC} from 'react';

import styles from './ServicesList.module.scss';
import {hourSitterImagePeople, hourSitterImageSun, regularSitterFigure, regularSitterPeople} from 'assets';
import {Button} from 'components';

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
                    <Button title="Оставить заявку" />
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
                <div className={styles.serviceHeadingContainer}>
                    <h1>Няня на постоянной основе</h1>
                </div>

                <div className={styles.regularServiceDescriptionContainer}>
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
                        <li>
                            <p>проведение развивающих игр и занятий с детьми</p>
                        </li>
                    </ul>
                    <Button title="Оставить заявку" />
                </div>
                {/* Background section */}
                <div className={styles.figureImageContainer}>
                    <img src={regularSitterFigure} alt="Regular babysitter figure" />
                </div>
                <div className={styles.regularPeopleImageContainer}>
                    <img src={regularSitterPeople} alt="Regular babysitter people" />
                </div>
            </div>
        </section>
    );
};

export default ServicesList;
