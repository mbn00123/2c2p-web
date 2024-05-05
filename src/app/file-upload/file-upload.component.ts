import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { InvoiceService } from '../services/invoice.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-file-upload',
  standalone: true,
  imports: [
    MatCardModule,
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [InvoiceService],
  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.scss'
})
export class FileUploadComponent {

  selectedFile: File | null = null;
  fileTooLarge = false;
  invalidExtension = false;
  fileNotSelected = false;

  uploadStatus: any = null;
  errorMsg:string = "";

  constructor(private invoiceService: InvoiceService) { }

  onFileSelect(event: any) {
    this.uploadStatus = null;
    this.errorMsg = "";

    const file = event.target.files[0];
    const allowedExtensions = ['csv', 'xml'];

    if (!file) {
      this.fileNotSelected = true;
      this.selectedFile = null;
      return;
    } else {
      this.fileNotSelected = false;
    }

    // Check file size
    if (file.size > 1024 * 1024) { // 1 MB
      this.fileTooLarge = true;
      this.selectedFile = null;
      return;
    } else {
      this.fileTooLarge = false;
    }

    // Check file extension
    const fileExtension = file.name.split('.').pop().toLowerCase();
    if (!allowedExtensions.includes(fileExtension)) {
      this.invalidExtension = true;
      this.selectedFile = null;
      return;
    } else {
      this.invalidExtension = false;
    }

    this.selectedFile = file;
  }

  onSubmit() {
    // Check if file is selected
    if (!this.selectedFile) {
      this.fileNotSelected = true;
      if (this.invalidExtension || this.fileTooLarge) {
        this.fileNotSelected = false;
      }
      return;
    } else {
      this.fileNotSelected = false;
    }

    // Handle file submission
    console.log("File submitted:", this.selectedFile);

    this.invoiceService.uploadFile(this.selectedFile).subscribe(response => {
      this.uploadStatus = true;
      console.log('File uploaded successfully:', response);
    }, error => {
      console.log(error);
      this.uploadStatus = false;
      this.errorMsg = error?.error;
    });
  }

  downloadLogFile(): void {
    const currentDate = new Date();
    const filename = `file_${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')}_${currentDate.getHours().toString().padStart(2, '0')}-${currentDate.getMinutes().toString().padStart(2, '0')}-${currentDate.getSeconds().toString().padStart(2, '0')}.log.txt`;

    const blob = new Blob([this.errorMsg], { type: 'text/plain' });

    const anchor = document.createElement('a');
    anchor.download = filename;
    anchor.href = window.URL.createObjectURL(blob);
    anchor.target = '_blank';
    anchor.style.display = 'none';
    document.body.appendChild(anchor);

    anchor.click();

    // Cleanup
    document.body.removeChild(anchor);
    window.URL.revokeObjectURL(anchor.href);
  }

}
