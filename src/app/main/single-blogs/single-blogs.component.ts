
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Location } from '@angular/common';
import { MainService } from '../services/main.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import * as firebase from 'firebase';
interface post{
  title:string;
  content:string;
}
@Component({
  selector: 'app-single-blogs',
  templateUrl: './single-blogs.component.html',
  styleUrls: ['./single-blogs.component.css'],

})

export class SingleBlogsComponent implements OnInit {
  pos:AngularFirestoreDocument<any>
  post;
  id;
  img
  constructor(private location:Location,private service: MainService,private route:ActivatedRoute,private afs:AngularFirestore) { 


  }

  ngOnInit() {
   this.id = this.route.snapshot.paramMap.get('id');

    this.post=this.service.GetSinglePost(this.id);
   this.post.subscribe((data)=>{
    
      let storage=firebase.storage().ref();
      storage.child(data.path).getDownloadURL().then((url)=>{
    this.img= url;
    
      }).catch((error)=>{
       
      })
    
    })
    


  }
 Back(){
  this.location.back();
}
}
