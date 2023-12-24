import React, {FC} from 'react';

import styles from './FeedbacksSection.module.scss';
import {CUSTOMERS} from 'constants/customers';

const FeedbacksSection: FC = () => {
    return (
        <section className={styles.sectionContainer}>
            <div className={styles.contentWrapper}>
                <h2>ОТЗЫВЫ</h2>
                <ul className={styles.feedbacksListContainer}>
                    {CUSTOMERS.map(customer => (
                        <li className={styles.feedbackItem} key={customer.id}>
                            <img src={customer.icon} alt="Customer icon" />
                            <p>{customer.name}</p>
                            <p>{customer.feedback}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default FeedbacksSection;
