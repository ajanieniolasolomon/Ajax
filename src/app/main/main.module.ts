
import { CommonModule } from '@angular/common';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { WelcomeComponent } from './welcome/welcome.component';
import { mainRouting } from './main.routing';

import {NavbarComponent} from './navbar/navbar.component'
import { AngularFireModule} from 'angularfire2';
import { AngularFirestoreModule} from 'angularfire2/firestore';
//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BlogsComponent } from './blogs/blogs.component';
import { SingleBlogsComponent } from './single-blogs/single-blogs.component'
import {MainService } from './services/main.service'
import 'rxjs/add/operator/switchMap';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { SlackComponent } from './slack/slack.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { environment } from '../../environments/environment';
var firebaseConfig = {
  apiKey: "AIzaSyCUFTTk1nNC1G9ehIGanZNwRIO4dRkW3Bo",
  authDomain: "test-d6bcd.firebaseapp.com",
  databaseURL: "https://test-d6bcd.firebaseio.com",
  projectId: "test-d6bcd",
  storageBucket: "test-d6bcd.appspot.com",
  messagingSenderId: "780714803934"
};
@NgModule({
  imports: [
    CommonModule,
    mainRouting,
  
    AngularFireModule.initializeApp(firebaseConfig),  // Add this .enablePersistence()
    AngularFirestoreModule.enablePersistence() ,                       
    MDBBootstrapModule,
    
    //BrowserAnimationsModule
  ],
  declarations: [WelcomeComponent,NavbarComponent,BlogsComponent,SingleBlogsComponent, SlackComponent, ContactComponent, AboutComponent],
  providers: [MainService],
  schemas: [ NO_ERRORS_SCHEMA ],
})
export class MainModule { }
