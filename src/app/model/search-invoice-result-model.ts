import { InvoiceModel } from "./invoice-model";

export interface SearchInvoiceResultModel {
    page: number;
    totalRecord: number;
    totalPage: number;
    data: InvoiceModel[];
}
