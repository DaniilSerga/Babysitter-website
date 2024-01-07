import React, {FC} from 'react';

import styles from './FeedbackDivider.module.scss';
import { checkMarkIcon, personIcon, starIcon } from 'assets';

const FeedbackDivider: FC = () => {
    return (
        <section className={styles.dividerContainer}>
            <div>
                <img src={starIcon} alt="star icon" />
                <p>Няни с опытом работы</p>
            </div>
            <div>
                <img src={checkMarkIcon} alt="check mark icon" />
                <p>Довольные родители</p>
            </div>
            <div>
                <img src={personIcon} alt="person icon" />
                <p>Качественный подбор</p>
            </div>
        </section>
    );
};

export default FeedbackDivider;
