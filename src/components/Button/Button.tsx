import React, {FC} from 'react';

import styles from './Button.module.scss';
import {ButtonProps} from './type';

const Button: FC<ButtonProps> = ({title}) => {
    return (
        <button className={styles.submitButton}>
            <p>{title}</p>
        </button>
    );
};

export default Button;
