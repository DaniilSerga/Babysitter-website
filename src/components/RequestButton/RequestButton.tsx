import React, {FC} from 'react';

import styles from './RequestButton.module.scss';

const RequestButton: FC = () => {
    return (
        <button className={styles.submitButton}>
            <p>Оставить заявку</p>
        </button>
    );
};

export default RequestButton;
