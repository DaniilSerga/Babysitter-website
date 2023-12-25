import React, {FC} from 'react';

import styles from './FormSection.module.scss';

const FormSection: FC = () => {
    return (
        <section className={styles.sectionContainer}>
            <div className={styles.contentWrapper}>
                <h2>Заполните данные для оформления заявки</h2>

            </div>
        </section>
    );
};

export default FormSection;
