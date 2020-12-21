import { ImportService } from './../../@services/import/import.service';
import { Component } from '@angular/core';
import { finalize } from 'rxjs/internal/operators/finalize';
import { catchError } from 'rxjs/internal/operators/catchError';

@Component({
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})

export class UploadComponent {
  isUploading: boolean;
  successMessage: string;
  errorMessage: string;

  constructor(private importService: ImportService) {}

  uploadFile(file: File): void {
    this.isUploading = true;
    this.importService
        .importEscolas(file)
        .pipe(finalize( () => this.isUploading = false ))
        .pipe(catchError(err => this.errorMessage = err.error.message ))
        .subscribe( (result) => this.successMessage = result.message);
  }
}
