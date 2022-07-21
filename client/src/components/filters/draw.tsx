import {IElementFilter} from "./types";
import {Input} from "../atoms/input";
import {Select} from "../atoms/select";

export const drawFilters = (element: IElementFilter) => {

    const {type, name, value, onChange, inputType, options} = element

    switch (type) {
        case "input":
            return (
                <Input
                    name={name}
                    type={inputType ? inputType : 'text'}
                    value={value}
                    onChange={onChange}
                />
            )
        case "select":
            return (
                <Select
                    options={options || []}
                    name={name}
                    value={value}
                    onChange={onChange}
                />
            )
        default:
            return <></>
    }
}