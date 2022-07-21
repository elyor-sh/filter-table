import React, {HTMLInputTypeAttribute} from "react";
import {IOptions} from "../atoms/select";

export type FilterElementType = 'input' | 'select'

export interface IElementFilter {
    type: FilterElementType
    name: string
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
    label: string
    inputType?: HTMLInputTypeAttribute
    options?: IOptions[]
}