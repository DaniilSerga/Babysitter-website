import React, {FC} from 'react';

import styles from './Footer.module.scss';
import { instagramIcon, telegramIcon, vkIcon } from 'assets';

const Footer: FC = () => {
    return (
        <footer className={styles.footerContainer}>
            <div className={styles.contentWrapper}>
                <div className={styles.locationContainer}>
                    <p>Республика Беларусь, 224028</p>
                    <p>г. Брест </p>
                </div>
                <a href='tel:80333048493'>8 (033) 304-84-93</a>
                <a href="mailto:vip_nanny@mail.ru">vip_nanny@mail.ru</a>
                <div className={styles.socialNetworksContainer}>
                    <a href="https://web.telegram.org/a/">
                        <img src={telegramIcon} alt="Telegram link" />
                    </a>
                    <a href="https://www.instagram.com/vasha_nanny_brest/">
                        <img src={instagramIcon} alt="Instagram link" />
                    </a>
                    <a href="https://vk.com/vasha_nanny_brest">
                        <img src={vkIcon} alt="VK link" />
                    </a>
                </div>
            </div>
            <div className={styles.bottomFooterContainer}>
                <p>2023 ИП “Ваша Няня”</p>
                <p>Политика конфиденциальности</p>
            </div>
        </footer>
    );
};

export default Footer;
