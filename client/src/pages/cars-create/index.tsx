import React from 'react';
import {useNavigate} from "react-router-dom";
import {useStore} from "effector-react";

import classes from './style.module.scss'
import {Input} from "../../components/atoms/input";
import {Button} from "../../components/atoms/button";
import {$carsCreateParams, resetCarsCreateParams, setCarsCreateParams} from "../../store/cars-create.store";
import {postCarService} from "../../service/cars.service";

const CarsCreate = () => {

    const navigate = useNavigate()

    const params = useStore($carsCreateParams)

    const {name, count, distance} = params

    const handleCancel = () => {
        resetCarsCreateParams()

        navigate(-1)
    }

    const handleSave = async () => {
        try {

            await postCarService(params)

            handleCancel()

        }catch (e) {
            console.log(e)
        }
    }

    return (
        <div className={classes.wrapper}>
            <div className={`d-f j-c-s-b mb-1`}>
                <Input
                    className={classes.input}
                    name='name'
                    value={name}
                    placeholder='Название*'
                    onChange={setCarsCreateParams}
                    required
                />
                <Input
                    className={classes.input}
                    name='count'
                    value={count || ''}
                    placeholder='Количество'
                    onChange={setCarsCreateParams}
                    type='number'
                />
            </div>
            <div className={`d-f mb-1`}>
                <Input
                    className={classes.input}
                    name='distance'
                    value={distance || ''}
                    placeholder='Расстояние'
                    onChange={setCarsCreateParams}
                    type='number'
                />
            </div>
            <div className={`d-f j-c-f-e`}>
               <Button
                    className={classes.cancelBtn}
                    onClick={handleCancel}
               >
                   Отмена
               </Button>
                <Button
                    className={classes.saveBtn}
                    disabled={!name}
                    onClick={handleSave}
                >
                    Сохранить
                </Button>
            </div>
        </div>
    );
};

export default CarsCreate
