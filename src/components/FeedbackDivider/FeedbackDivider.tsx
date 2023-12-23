import React, {FC} from 'react';

import styles from './FeedbackDivider.module.scss';

const FeedbackDivider: FC = () => {
    return (
        <section className={styles.dividerContainer}>
            <p>Няни с опытом работы</p>
            <p>Довольные родители</p>
            <p>Качественный подбор</p>
        </section>
    );
};

export default FeedbackDivider;
