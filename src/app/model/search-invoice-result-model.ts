import { InvoiceModel } from "./invoice-model";

export interface SearchInvoiceResultModel {
    pageIndex: number;
    totalRecord: number;
    totalPage: number;
    data: InvoiceModel[];
}
