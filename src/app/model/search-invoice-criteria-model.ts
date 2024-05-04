export interface SearchInvoiceCriteriaModel {
    pageIndex: number,
    pageSize: number,
    currency: string | null;
    status: string | null;
    startDate: Date | null;
    endDate: Date | null;
}
