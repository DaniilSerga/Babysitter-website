import React, {FC} from 'react';

import styles from './FeedbackDivider.module.scss';

const FeedbackDivider: FC = () => {
    return (
        <div className={styles.dividerContainer}>
            <p>Няни с опытом работы</p>
            <p>Довольные родители</p>
            <p>Качественный подбор</p>
        </div>
    );
};

export default FeedbackDivider;
