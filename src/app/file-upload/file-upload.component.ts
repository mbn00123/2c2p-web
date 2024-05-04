import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';

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
  ],
  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.scss'
})
export class FileUploadComponent {

  selectedFile: File | null = null;
  fileTooLarge = false;
  invalidExtension = false;
  fileNotSelected = false;

  constructor() { }

  onFileSelect(event: any) {
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
  }

}
