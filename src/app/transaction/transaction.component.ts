import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { CommonModule } from '@angular/common';
import { MasterService } from '../services/master.service';
import { DropdownListModel } from '../model/dropdown-list-model';
import { SearchInvoiceCriteriaModel } from '../model/search-invoice-criteria-model';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MomentDateModule, MomentDateAdapter } from '@angular/material-moment-adapter';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { SearchInvoiceResultModel } from '../model/search-invoice-result-model';
import { HttpClientModule } from '@angular/common/http';
import { InvoiceService } from '../services/invoice.service';

export const MY_FORMATS = {
  parse: {
    dateInput: 'LL'
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'YYYY'
  }
};

@Component({
  selector: 'app-transaction',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatRadioModule,
    MatSelectModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatPaginatorModule,
    HttpClientModule
  ],
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
    InvoiceService
  ],
  templateUrl: './transaction.component.html',
  styleUrl: './transaction.component.scss',
})
export class TransactionComponent implements OnInit {

  constructor(
    private masterService: MasterService,
    private invoiceService: InvoiceService
  ) { }

  public SEARCH_TYPE = {
    CURRENCY: 1,
    DATE: 2,
    STATUS: 3
  }

  public searchType: number = 1;
  public criteria: SearchInvoiceCriteriaModel = {
    pageIndex: 0,
    pageSize: 25,
    currency: "THB",
    status: "A",
    startDate: new Date(),
    endDate: new Date(),
  }

  public currencies: DropdownListModel<string, string>[] = [];
  public invoiceStatus: DropdownListModel<string, string>[] = [];

  public pageSizeOptions = [10, 25, 50, 100];

  public result: SearchInvoiceResultModel = {
    pageIndex: 0,
    totalPage: 0,
    totalRecord: 0,
    data: []
  };

  ngOnInit() {
    this.currencies = this.masterService.GetCurrency();
    this.invoiceStatus = this.masterService.GetInvoiceStatus();
  }

  pageChanged(event: PageEvent) {
    this.criteria.pageIndex = event.pageIndex;
    this.criteria.pageSize = event.pageSize;
    this.search();
  }

  search() {
    
    switch (this.searchType) {
      case this.SEARCH_TYPE.CURRENCY:
        this.invoiceService.SearchByCurrency(this.criteria).subscribe((res: any) => {
          this.result = res;
        });
        break;
      case this.SEARCH_TYPE.DATE:
        this.invoiceService.SearchByTransactionDate(this.criteria).subscribe((res: any) => {
          this.result = res;
        });
        break;
      case this.SEARCH_TYPE.STATUS:
        this.invoiceService.SearchByStatus(this.criteria).subscribe((res: any) => {
          this.result = res;
        });
        break;
    }
  }
}
