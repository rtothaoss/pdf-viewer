import { Component, OnInit, Input, Output } from '@angular/core';
import { FileUploadService } from 'src/app/services/file-upload.service';
import { FileUpload } from 'src/app/models/file-upload.model';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-upload-details',
  templateUrl: './upload-details.component.html',
  styleUrls: ['./upload-details.component.css'],
})
export class UploadDetailsComponent implements OnInit {
  @Input() fileUpload!: FileUpload;

  constructor(private uploadService: FileUploadService) {}

  ngOnInit(): void {}

  viewFile(url: string) {
    this.uploadService.getFile(url)
  }

  deleteFileUpload(fileUpload: FileUpload): void {
    this.uploadService.deleteFile(fileUpload);
  }
}
