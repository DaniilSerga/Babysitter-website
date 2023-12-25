import React, {FC} from 'react';

import styles from './FeedbacksSection.module.scss';
import {CUSTOMERS} from 'constants/customers';
import { QuestionsDivider } from 'components';

const FeedbacksSection: FC = () => {
    return (
        <section className={styles.sectionContainer}>
            <div className={styles.contentWrapper}>
                <h2>ОТЗЫВЫ</h2>
                <ul className={styles.feedbacksListContainer}>
                    {CUSTOMERS.map(customer => (
                        <li className={styles.feedbackItem} key={customer.id}>
                            <div className={styles.customerIconWrapper}>
                                <img src={customer.icon} alt="Customer icon" />
                            </div>
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
