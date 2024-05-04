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
    MatPaginatorModule
  ],
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS }
  ],
  templateUrl: './transaction.component.html',
  styleUrl: './transaction.component.scss',
})
export class TransactionComponent implements OnInit {

  constructor(private masterService: MasterService) { }

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
    page: 0,
    totalPage: 100,
    totalRecord: 250,
    data: [{
      invoiceNumber: 'XXXX',
      invoiceAmount: 999999.99,
      currencyCode: 'THB',
      status: 'A',
    },{
      invoiceNumber: 'XXXX',
      invoiceAmount: 999999.99,
      currencyCode: 'THB',
      status: 'R',
    },{
      invoiceNumber: 'XXXX',
      invoiceAmount: 999999.99,
      currencyCode: 'THB',
      status: 'D',
    }]
  };

  ngOnInit() {
    this.currencies = this.masterService.GetCurrency();
    this.invoiceStatus = this.masterService.GetInvoiceStatus();
  }

  pageChanged(event: PageEvent) {

  }

  async search() {

  }
}
