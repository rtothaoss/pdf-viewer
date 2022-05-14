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
  @ViewChild('button1') button1!: HTMLButtonElement;
  @ViewChild('button2') button2!: HTMLButtonElement;
  private fileChangeSub! : Subscription;

  document = 'https://firebasestorage.googleapis.com/v0/b/pdfviewer-63816.appspot.com/o/uploads%2Fwebviewer-demo-annotated.pdf?alt=media&token=6e9e525f-2906-494c-9e39-a4eebe70caca'
  document2 = 'https://firebasestorage.googleapis.com/v0/b/pdfviewer-63816.appspot.com/o/uploads%2FsamplePDF.pdf?alt=media&token=913283ff-43fe-41cb-93b2-9517c8ae3e3e'
  constructor(private uploadService: FileUploadService) {}


  ngOnInit(): void {
      this.fileChangeSub = this.uploadService.fileChange.subscribe(value => {
        console.log(value)
        this.document = value
      })
    
  }

  accessButtonEvent(event: any) {
    console.log(event)
  }

  ngAfterViewInit(): void {
    WebViewer({
      path: '../../../assets/lib',
      
    }, this.viewerRef.nativeElement).then(instance => {
      this.button1.addEventListener('click', () => {
        instance.UI.loadDocument(this.document)
      })
      this.button2.addEventListener('click', () => {
        instance.UI.loadDocument(this.document2)
      })
      instance.UI.loadDocument(this.document)
        
      instance.UI.setTheme('dark')

    })
  }

  ngOnDestroy(): void {
  this.fileChangeSub.unsubscribe();
  }


}
