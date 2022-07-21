import classes from "./style.module.scss";
import {useStore} from "effector-react";
import {
    $carFilterParams,
    handleChangeCarsFilter,
    handleClearCarsFilter,
    handleSearchCars
} from "../../store/cars.store";
import {Filters} from "../../components/filters";
import {columnOptions, conditionOptions} from "./options";

const CarsFilter = () => {

    const filterParams = useStore($carFilterParams)

    return (
        <div className={classes.filterWrapper}>
            <Filters
                elements={
                    [
                        {
                            type: 'select',
                            name: 'filterParam',
                            value: filterParams.filterParam || '',
                            onChange: handleChangeCarsFilter,
                            label: 'Выберите колонку',
                            options: columnOptions
                        },
                        {
                            type: 'select',
                            name: 'type',
                            value: filterParams.type || '',
                            onChange: handleChangeCarsFilter,
                            label: 'Выберите условие фильтрации',
                            options: conditionOptions
                        },
                        {
                            type: 'input',
                            name: 'text',
                            value: filterParams.text || '',
                            onChange: handleChangeCarsFilter,
                            label: 'Значения для фильтрации',
                        }
                    ]
                }
                handleSubmit={handleSearchCars}
                handleClear={handleClearCarsFilter}
                disabledSearch={!filterParams.text}
            />
        </div>
    )
}

export default CarsFilter