import React, {FC} from 'react';

import styles from './QuestionsDivider.module.scss';
import { instagramIcon, telegramIcon } from 'assets';

const QuestionsDivider: FC = () => {
    return (
        <section className={styles.sectionContainer}>
            <div className={styles.contentWrapper}>
                <p>Остались вопросы?</p>
                <p>Вы можете связаться с нами через форму обратной связи или написать нам в соцсетях!</p>
                <div className={styles.linksContainer}>
                    <p>Мы в соцсетях:</p>
                    <a className={styles.iconContainer} href="https://www.instagram.com/vasha_nanny_brest/">
                        <img src={instagramIcon} alt="Instagram icon" />
                    </a>
                    <a className={styles.iconContainer} href="https://web.telegram.org">
                        <img src={telegramIcon} alt="Telegram icon" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default QuestionsDivider;
