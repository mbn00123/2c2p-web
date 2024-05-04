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
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatCardModule, MatRadioModule, MatSelectModule, MatDatepickerModule, ReactiveFormsModule, MatButtonModule],
  providers: [{ provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
  { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS }],
  templateUrl: './transaction.component.html',
  styleUrl: './transaction.component.scss',
})
export class TransactionComponent implements OnInit {

  constructor(private masterService: MasterService) { }

  public searchType: number = 1;
  public criteria: SearchInvoiceCriteriaModel = {
    currency: null,
    status: null,
    startDate: null,
    endDate: null
  }

  public currencies: DropdownListModel<string, string>[] = [];
  public invoiceStatus: DropdownListModel<string, string>[] = [];

  ngOnInit() {
    this.currencies = this.masterService.GetCurrency();
    this.invoiceStatus = this.masterService.GetInvoiceStatus();

    this.criteria = {
      currency: "THB",
      status: "A",
      startDate: new Date(),
      endDate: new Date(),
    }
  }

  async search() {

  }
}
