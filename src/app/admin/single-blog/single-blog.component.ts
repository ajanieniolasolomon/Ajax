import * as firebase from 'firebase';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Location } from '@angular/common';
import { AdminService } from '../services/admin.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-single-blog',
  templateUrl: './single-blog.component.html',
  styleUrls: ['./single-blog.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SingleBlogComponent implements OnInit {
  post:Observable<any>;
  ad: any;
  adForm: FormGroup;
  id;
  title;
  content;
  img?:any;
  path?:any;
  subtitle?:string;
  listing?:any;
  constructor( private fb: FormBuilder,private location:Location,private service: AdminService,private route:ActivatedRoute,private afs:AngularFirestore) { }

  ngOnInit() {
 this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id) 
this.post=this.service.GetSinglePost(this.id)
this.post.subscribe((data)=>{
  console.log(data);
  this.title=data.title;
  this.content=data.content;
  this.path=data.path;
  this.img=data.img;
  this. subtitle=data. subtitle;
  this.path=data.path
  let storage=firebase.storage().ref();
  storage.child(data.path).getDownloadURL().then((url)=>{
this.img= url;

  }).catch((error)=>{
    console.log(error);
  })

})

  }
  Back(){
    this.location.back();
  }
  edit(){
    let post={
      title:this.title,
      content:this.content
      
    }
    this.service.update(this.id,post)
  }

}
interface post{
  title:string;
  subtitle?:string;
  content:string;
  date?:any;
  img?:any;
  path?:any;
}