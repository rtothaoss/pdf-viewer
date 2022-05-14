import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FileUploadService } from './services/file-upload.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  public Message='';
  title = 'PDF Viewer';
  isVisible: boolean = false;

  private fileChangeSub!: Subscription;

  constructor(private uploadService: FileUploadService) {}

  ngOnInit(): void {
    this.fileChangeSub = this.uploadService.fileChange.subscribe(value => {
      this.isVisible = true;
    })
  }


  ngOnDestroy(): void {
      this.fileChangeSub.unsubscribe();
  }
}