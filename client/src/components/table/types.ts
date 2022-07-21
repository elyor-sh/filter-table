export interface TableHeadProps {
    text: string
}

export interface TableBodyCellProps {
    uniqueKey: string
    contentKey: string
    type: 'string' | 'data'
}