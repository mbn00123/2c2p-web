import { Routes } from '@angular/router';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { TransactionComponent } from './transaction/transaction.component';
import { Page404Component } from './page404/page404.component';

export const routes: Routes = [
    { path: 'upload', component: FileUploadComponent },
    { path: 'transaction', component: TransactionComponent },
    { path: '',   redirectTo: '/transaction', pathMatch: 'full' },
    { path: '**', component: Page404Component }
  ];
