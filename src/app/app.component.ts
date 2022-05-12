import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import WebViewer from '@pdftron/webviewer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  @ViewChild('viewer') viewerRef!: ElementRef;

  document = 'https://pdftron.s3.amazonaws.com/downloads/pl/webviewer-demo.pdf'

  ngAfterViewInit(): void {
      WebViewer({
        path: '../assets/lib',
        initialDoc: this.document
      }, this.viewerRef.nativeElement).then(instance => {
        instance.UI.setTheme('dark')
        // instance.UI.loadDocument(this.document, {
        //   customHeaders: {
        //     'Access-Control-Allow-Origin': '*',
        //     'Access-Control-Allow-Method': 'GET',
        //     'Access-Control-Allow-Headers': 'authorization'
        //   }
        // })
      })
  }

  // onChangeDocument() {
  //   this.document = 'http://www.africau.edu/images/default/sample.pdf'
  // }

}