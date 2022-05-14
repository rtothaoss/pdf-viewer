import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import WebViewer from '@pdftron/webviewer';
import { Subscription } from 'rxjs';
import { FileUploadService } from 'src/app/services/file-upload.service';

@Component({
  selector: 'app-file-viewer',
  templateUrl: './file-viewer.component.html',
  styleUrls: ['./file-viewer.component.css']
})
export class FileViewerComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild('viewer') viewerRef!: ElementRef;
  private fileChangeSub! : Subscription;
  webViewerInstance: any
  
  constructor(private uploadService: FileUploadService) {}


  ngOnInit(): void {
      this.fileChangeSub = this.uploadService.fileChange.subscribe(value => {
        this.webViewerInstance.UI.loadDocument(value)
      })
    
  }

  
  ngAfterViewInit(): void {
      WebViewer({
    path: '../../../assets/lib',
    useDownloader:false
    
  }, this.viewerRef.nativeElement).then(instance => {

    this.webViewerInstance = instance
      
    instance.UI.setTheme('dark')

  })
  }

  ngOnDestroy(): void {
  this.fileChangeSub.unsubscribe();
  }




}
