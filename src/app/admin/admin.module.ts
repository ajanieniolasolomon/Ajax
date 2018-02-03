import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { adminRouting } from './admin.routing';
import { LoginComponent } from './login/login.component';
import { AdminService } from './services/admin.service';
import { MainComponent } from './main/main.component';
import { BlogComponent } from './blog/blog.component';
import { SingleBlogComponent } from './single-blog/single-blog.component';
import { EditComponent } from './edit/edit.component';
import { AddComponent } from './add/add.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule} from 'angularfire2';
import { AngularFirestoreModule} from 'angularfire2/firestore';
import { AuthService } from './services/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
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
    MaterialModule,
    adminRouting,
    AngularFireAuthModule ,
    AngularFireModule.initializeApp(firebaseConfig),  // Add this
    AngularFirestoreModule,
    FormsModule, ReactiveFormsModule,
    MDBBootstrapModule
  ],
  declarations: [ WelcomeComponent,LoginComponent,MainComponent,BlogComponent,SingleBlogComponent,EditComponent,AddComponent],
  providers: [AdminService,AuthService],
  schemas: [ NO_ERRORS_SCHEMA ],
})
export class AdminModule { }
