import React, {FC} from 'react';
import styles from './Header.module.scss';

const Header: FC = () => {
    return (
        <div>
            <p className={styles.text}>Header</p>
        </div>
    );
};

export default Header;
