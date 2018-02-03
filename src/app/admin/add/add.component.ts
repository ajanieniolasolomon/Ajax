import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Router,Params,ActivatedRoute} from '@angular/router';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AddComponent implements OnInit {
  title
  subtitle
  content;
  date;
  img;
  path;
  constructor(private service:AdminService,private _router:Router,private _route:ActivatedRoute) { }

  ngOnInit() {
  }
  onAddsubmit(){
    
      let listing={
        title:this.title,
        subtitle :this.subtitle,
    content:this.content,
    date:Date.now()
      }
      this.service.addlisting(listing);
     this._router.navigate(['./admin/admin/welcome']);
      
    }

}
