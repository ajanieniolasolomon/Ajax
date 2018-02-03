import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material';
import { Route, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  rForm: FormGroup;
  email:any;                     // A property for our submitted form
  password:any = '';
  err:any;
  constructor(public snackBar: MatSnackBar,private fb: FormBuilder,private router:Router,private service:AuthService) { 

    this.rForm = fb.group({
      'email' : [null, Validators.required],
      'password' : [null, Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(20)])],
      
    });
  }

  ngOnInit() {
  }
  Login(post) {
    this.email = post.email;
    this.password = post.password;
    this.service.emailLogin(this.email,this.password).then((data)=>{
      this.snackBar.open('You ar welcome',   this.email ,{
        duration:3000,
      });
     
   
this.router.navigate(['/admin/admin/welcome']);
    }).catch((error)=>{
this.err=error;

this.snackBar.open(this.err, '😀' ,{
  duration:3000,
});
    })
  }
clearmessage(){
  setTimeout(()=>{
    this.err='';
  },3000)
}

}
