import React, {FC, useState} from 'react';

import styles from './FormSection.module.scss';
import {FormControl, InputLabel, MenuItem, Select, TextField} from '@mui/material';
import Application from 'types/application';
import {CITIES, SERVICES} from 'constants/formData';

const FormSection: FC = () => {
    const [application, setApplication] = useState<Application>({name: '', phoneNumber: '', city: '', service: '', description: ''});

    const emailAction = () => {
        console.log('email sent');
        console.log(application);
    };

    const handleChange = (type: 'name' | 'phoneNumber' | 'city' | 'serviceType' | 'description', value) => {
        switch (type) {
            case 'name':
                setApplication(prevValue => {
                    return {...prevValue, name: value};
                })
                break;
            case 'phoneNumber':
                setApplication(prevValue => {
                    return {...prevValue, phoneNumber: value};
                });
                break;
            case 'city': 
                setApplication(prevValue => {
                    return {...prevValue, city: value}
                })
                break;
            case 'serviceType':
                setApplication((prevValue) => {
                    return {...prevValue, service: value}
                })
                break;
            case 'description':
                setApplication(prevValue => {
                    return {...prevValue, description: value};
                })
        }
    }

    return (
        <section className={styles.sectionContainer}>
            <div className={styles.contentWrapper}>
                <h2>Заполните данные для оформления заявки</h2>
                <div className={styles.formContainer}>
                    <div className={styles.generalInputsWrapper}>
                        <TextField className={styles.input} label="ФИО" type="text" onChange={(event) => handleChange('name', event.target.value)} variant='outlined'/>
                        <TextField className={styles.input} label="Номер телефона" type="tel" onChange={(event) => handleChange('phoneNumber', event.target.value)} variant='outlined'/>
                        <FormControl>
                            <InputLabel id="demo-simple-select-label">Выберите город</InputLabel>
                            <Select
                                className={styles.selectorContainer}
                                value={application.city}
                                label="Выберите город"
                                onChange={(event) => handleChange('city', event.target.value)}
                            >
                                {CITIES.map((city) => (
                                    <MenuItem key={city.id} value={city.name}>{city.name}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <FormControl>
                            <InputLabel id="demo-simple-select-label">Выберите услугу</InputLabel>
                            <Select
                                className={styles.selectorContainer}
                                value={application.service}
                                label="Выберите услугу"
                                onChange={(event) => handleChange('serviceType', event.target.value)}
                            >
                                {SERVICES.map((service) => (
                                    <MenuItem key={service.id} value={service.name}>{service.name}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </div>
                    <TextField className={styles.descriptionField} multiline label='Описание ситуации' inputProps={{maxLength: 200}} onChange={(event) => handleChange('description', event.target.value)}/>
                    <p>{application.description.length}/200</p>
                    <button className={styles.submitButton} onClick={emailAction}>
                        <p>Отправить</p>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FormSection;
