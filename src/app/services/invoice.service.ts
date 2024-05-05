import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchInvoiceCriteriaModel } from '../model/search-invoice-criteria-model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  constructor(private http: HttpClient) { }

  SearchByStatus(criteria: SearchInvoiceCriteriaModel){
    return this.http.post(environment.ApiEndpoint + "/Invoice/SearchByStatus", criteria);
  }

  SearchByCurrency(criteria: SearchInvoiceCriteriaModel){
    return this.http.post(environment.ApiEndpoint + "/Invoice/SearchByCurrency", criteria);
  }

  SearchByTransactionDate(criteria: SearchInvoiceCriteriaModel){
    return this.http.post(environment.ApiEndpoint + "/Invoice/SearchByTransactionDate", criteria);
  }

  uploadFile(file: File) {
    const formData = new FormData();
    formData.append('file', file);

    return this.http.post(environment.ApiEndpoint + "/Invoice/UploadFile", formData);
  }
}
