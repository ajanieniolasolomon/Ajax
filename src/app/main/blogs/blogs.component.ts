import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import {ActivatedRoute} from '@angular/router'
import { MainService } from '../services/main.service';
import * as firebase from 'firebase';
@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BlogsComponent implements OnInit {

  posts;
  imageurl:any;
  showSpinner: boolean = true;
  
  constructor(private route:ActivatedRoute,private service:MainService) { }

  ngOnInit() {

  this.service.GetPost().subscribe(data=>{
    this.posts=data;
  this.showSpinner=false;
        data.forEach(cat=>{
          
   
      
       let storage=firebase.storage().ref();
            storage.child(cat.path).getDownloadURL().then((url)=>{
      cat.imageurl= url;
      
           })
        })
       
      });
    ;

    
  
  }

}
interface PostId extends Post { 
  id: string; 
}
interface Post {
  title: string;
 subtitle: string;
}