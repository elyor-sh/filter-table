export class CommonQueryDto {
    page: number
    rowCount: number
    offset: number

    constructor(params: any) {
        this.page = params.page ? params.page : 1
        this.rowCount = params.rowCount ? params.rowCount : 30

        this.offset = (this.page - 1) * this.rowCount
    }
}