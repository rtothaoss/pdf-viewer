import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UploadFormComponent } from './components/upload-form/upload-form.component';
import { UploadDetailsComponent } from './components/upload-details/upload-details.component';
import { FileViewerComponent } from './components/file-viewer/file-viewer.component';
import { UploadListComponent } from './components/upload-list/upload-list.component';
import { AuthComponent } from './components/auth/auth.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { HeaderComponent } from './shared/header/header.component'
import { LoadingComponent } from './shared/loading/loading.component';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    UploadFormComponent,
    UploadDetailsComponent,
    FileViewerComponent,
    UploadListComponent,
    AuthComponent,
    HeaderComponent,
    LoadingComponent,
    LoadingComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    AngularFireModule,
    AngularFirestoreModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideDatabase(() => getDatabase())
  ],
  providers: [{provide: FIREBASE_OPTIONS, useValue: environment.firebase}],
  bootstrap: [AppComponent]
})
export class AppModule { }
